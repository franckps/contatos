const { Router } = require('express')
const backend = Router()

backend.get('/', (req, res) => {
    res.json({hello: 'world!'})
});

module.exports = backend