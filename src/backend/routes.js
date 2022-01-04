const { Router, json } = require('express');
const backend = Router();

backend.use(json());

module.exports = backend;
