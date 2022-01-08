const { Router } = require('express');
const frontend = Router();

frontend.get('/', (req, res) => {
  res.render('./');
});

frontend.get('/create-contact', (req, res) => {
  res.render('./pages/contact-form');
});

module.exports = frontend;
