const express = require('express')
const bodyParser = require('body-parser')
const router = require('./app/router')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)
app.use('/uploads', express.static('uploads'));

app.listen(port, function() {
  console.log('Listening on port 3000...')
})
