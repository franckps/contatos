const { Router, json } = require('express');
const frontend = Router();
const { phoneSlices, formatContactDataFromAPI } = require('./helpers');
const api = require('./api');

frontend.use(json());

frontend.get('/', (req, res) => {
  res.redirect('/contacts');
});

frontend.get('/contacts', async (req, res) => {
  const responseData = await api.get('/');
  const contactsData = responseData.data.map(formatContactDataFromAPI);
  res.render('./', { contactsData });
});

frontend.get('/contacts/form/', (req, res) => {
  res.render('./pages/contact-form');
});

frontend.get('/contacts/form/:id', async (req, res) => {
  const id = req.params.id;
  const responseData = await api.get('/');
  const contact = responseData.data.find((elm) => elm.id === id);
  contactData = formatContactDataFromAPI(contact);
  res.render('./pages/contact-form', { contactData });
});

frontend.post('/contacts/', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birth_date,
      main_phone,
      other_phone,
      CEP,
      state,
      city,
      district,
      street,
      number,
    } = req.body;
    const [main_code, main_number] = phoneSlices(main_phone);
    const [other_code, other_number] = phoneSlices(other_phone);
    const newData = {
      first_name,
      last_name,
      main_phone: { code: main_code, phone: main_number },
      other_phone: { code: other_code, phone: other_number },
      address: { state, city, street, number, district, CEP },
      birth_date,
    };
    await api.post('/', newData);
    res.send({ success: true, message: 'Contato cadastrado com sucesso!' });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: 'Erro ao tentar cadastrar contato!',
    });
  }
});

frontend.put('/contacts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const {
      first_name,
      last_name,
      birth_date,
      main_phone,
      other_phone,
      CEP,
      state,
      city,
      district,
      street,
      number,
    } = req.body;
    const [main_code, main_number] = phoneSlices(main_phone);
    const [other_code, other_number] = phoneSlices(other_phone);
    const newData = {
      first_name,
      last_name,
      main_phone: { code: main_code, phone: main_number },
      other_phone: { code: other_code, phone: other_number },
      address: { state, city, street, number, district, CEP },
      birth_date,
    };
    await api.put(`/${id}`, newData);
    res.send({ success: true, message: 'Contato atualizado com sucesso!' });
  } catch (err) {
    console.log(err);
    res.send({ success: false, message: 'Erro ao tentar atualizar contato!' });
  }
});

frontend.delete('/contacts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await api.delete(`/${id}`);
    res.send({ success: true, message: 'Contato excluido com sucesso!' });
  } catch (err) {
    console.log(err);
    res.send({ success: false, message: 'Erro ao tentar excluir contato!' });
  }
});

module.exports = frontend;
