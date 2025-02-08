const express = require('express')
const path = require('path')
let data = `about data`
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send(`${data}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})