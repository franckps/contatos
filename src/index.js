const express = require('express')
const backendRoutes = require('./backend/routes')

const app = express()

app.use('/api', backendRoutes)

app.get('/', (req, res) => {
    res.send("Hey Dude!")
})

app.listen('80')