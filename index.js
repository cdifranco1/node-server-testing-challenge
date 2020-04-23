const express = require('express')
const apiRoute = require('./api')
const server = express()

const port = process.env.PORT || 5000

server.use(express.json())

server.use('/api', apiRoute)

server.get('/', (req, res) => [
  res.status(200).json({message: "Server is working"})
])

server.listen(port, () => {
  console.log(`Server is lisening at localhost:${port}`)
})