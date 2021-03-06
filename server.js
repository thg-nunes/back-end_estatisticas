const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./routes')

const corsOptions = {
  origin: '*'
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(routers)

app.listen(3333, function () {
  console.log('web server listening on port 3333')
})