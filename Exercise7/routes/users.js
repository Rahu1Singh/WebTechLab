const express = require('express')
const router =express.Router()

router.get('/', (req, res) => {
    res.send('<h1>User List</h1>')
})

router.get('/new', (req, res) => {
    res.send('<h3>User New Form</h3>')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.send(`Get User with ID ${req.params.id}`)
})

module.exports = router