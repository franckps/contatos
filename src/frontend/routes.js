const { Router, json } = require('express');
const frontend = Router();
const { phoneSlices } = require('./helpers');
const api = require('./api');

frontend.use(json());

frontend.get('/', (req, res) => {
  res.render('./');
});

frontend.get('/create-contact', (req, res) => {
  res.render('./pages/contact-form');
});
frontend.post('/create-contact', async (req, res) => {
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

module.exports = frontend;
