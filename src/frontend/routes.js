const { Router, json } = require('express');
const frontend = Router();

frontend.use(json())

frontend.get('/', (req, res) => {
  res.render('./');
});

frontend.get('/create-contact', (req, res) => {
  res.render('./pages/contact-form');
});
frontend.post('/create-contact', (req, res) => {
  console.log({ body: req.body })
  res.send({ success: true })
});

module.exports = frontend;
