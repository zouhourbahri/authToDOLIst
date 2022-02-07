const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello api!')
})
router.post('/register', (req, res) => {
    //
})
module.exports = router