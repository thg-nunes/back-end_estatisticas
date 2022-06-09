const express = require("express")

const routers = express.Router()

const get_filter = require('./controllers/dbGetFilters')
const get_empresasAbertas = require('./controllers/dbGetData/get_empresasAbertas')
const get_empresasAtivas = require('./controllers/dbGetData/get_empresasAtivas')
const get_capitalSocial = require('./controllers/dbGetData/get_capitalSocial')

routers.post('/filter/:filter', get_filter.getFilter)

routers.post('/capitalSocial', get_capitalSocial.getCapitalSocial)

routers.post('/empresasAbertas', get_empresasAbertas.getEmpresasAbertas)
routers.post('/empresasAtivas', get_empresasAtivas.getEmpresasAtivas)

module.exports = routers