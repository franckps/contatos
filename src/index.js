const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hey Dude!")
})

app.listen('80')