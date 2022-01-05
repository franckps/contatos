const { Router } = require('express');
const frontend = Router();

frontend.get('/', (req, res) => {
  res.render('./');
});

module.exports = frontend;
