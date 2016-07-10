const express = require('express')
const router = express.Router()

const filesController = require('./controllers/filesController')
router.post('/1/uploads', filesController.save)

module.exports = router
