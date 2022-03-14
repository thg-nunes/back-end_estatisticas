const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./routes')

const corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(routers)

app.listen(3000, function () {
  console.log('web server listening on port 3000')
})