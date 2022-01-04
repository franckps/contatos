const { Router, json } = require('express');
const adaptRoute = require('./adapters/express/route-adapter');
const makeAddContactController = require('./main/factories/controllers/addContact/addContact');
const backend = Router();

backend.use(json());

const db = [];

backend.post('/', adaptRoute(makeAddContactController(db)));

module.exports = backend;
