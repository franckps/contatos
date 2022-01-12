const { Router, json } = require('express');
const frontend = Router();
const { phoneSlices, joinPhone } = require('./helpers');
const api = require('./api');

frontend.use(json());

frontend.get('/contacts', (req, res) => {
  res.render('./');
});

frontend.get('/contacts/form/', (req, res) => {
  res.render('./pages/contact-form');
});

frontend.get('/contacts/form/:id', async (req, res) => {
  const id = req.params.id;
  const responseData = await api.get('/');
  const contact = responseData.data.find((elm) => elm.id === id);
  const {
    first_name,
    last_name,
    main_phone: { code: main_code, phone: main_number },
    other_phone: { code: other_code, phone: other_number },
    address: { state, city, street, number, district, CEP },
    birth_date,
  } = contact;
  const contactData = {
    id,
    first_name,
    last_name,
    main_phone: joinPhone(main_code, main_number),
    other_phone: joinPhone(other_code, other_number),
    state,
    city,
    street,
    number,
    district,
    CEP,
    birth_date,
  };
  console.log({ contactData });
  res.render('./pages/contact-form', { contactData });
});

frontend.post('/contacts/', async (req, res) => {
  console.log({ body: req.body });
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
  const responseData = await api.post('/', newData);
  console.log({ dados: responseData.data });
  res.send({ success: true });
});

frontend.put('/contacts/:id', async (req, res) => {
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
  const responseData = await api.put(`/${id}`, newData);
  console.log({ dados: responseData.data });
  res.send({ success: true });
});

frontend.delete('/contacts/:id', async (req, res) => {
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
  const responseData = await api.delete(`/${id}`);
  console.log({ dados: responseData.data });
  res.send({ success: true });
});

module.exports = frontend;
