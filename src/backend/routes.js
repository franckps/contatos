const { Router, json } = require('express');
const adaptRoute = require('./adapters/express/route-adapter');
const makeAddContactController = require('./main/factories/controllers/addContact/addContact');
const makeIndexContactController = require('./main/factories/controllers/indexContact/indexContact');
const backend = Router();

backend.use(json());

const db = [];

backend.post('/', adaptRoute(makeAddContactController(db)));
backend.get('/', adaptRoute(makeIndexContactController(db)));

module.exports = backend;
