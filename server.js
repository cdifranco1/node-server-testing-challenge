const express = require('express')
const apiRoute = require('./api')
const server = express()

server.use(express.json())
server.use('/api', apiRoute)

server.get('/', (req, res) => [
  res.status(200).json({message: "Server is working"})
])


module.exports = server