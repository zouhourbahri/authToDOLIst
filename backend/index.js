const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const port = 3000
const app = express()
app.use(bodyParser.json())
app.use('/api', api)
app.get('/', (req, res) => {
    res.send('hello server!')
})

app.listen(port, () => {
    console.log(`server running on localhost ${port}`);
})