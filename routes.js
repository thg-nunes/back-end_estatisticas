const express = require("express")

const routers = express.Router()

const get_municipios = require('./controllers/dbGetFIlters/get_municipios')
const get_porte = require('./controllers/dbGetFIlters/get_porte')
const get_setor = require('./controllers/dbGetFIlters/get_setor')
const get_natureza = require('./controllers/dbGetFIlters/get_natureza')
const get_descricaoAtividade = require('./controllers/dbGetFIlters/get_descricaoAtividade')
const get_secaoAtividade = require('./controllers/dbGetFIlters/get_secaoAtividade')
const filtersBuild = require('./controllers/dbGetFIlters/filtersBuild')

const get_empresasAbertas = require('./controllers/dbGetData/get_empresasAbertas')
const get_empresasAtivas = require('./controllers/dbGetData/get_empresasAtivas')

routers.get('/municipios', get_municipios.getMunicipios)
routers.get('/porte', get_porte.getPorte)
routers.get('/setor', get_setor.getSetor)
routers.get('/natureza', get_natureza.getNatureza)
routers.get('/descricaoAtividade', get_descricaoAtividade.getDescricaoAtividade)
routers.get('/secaoAtividade', get_secaoAtividade.getSecaoAtividade)

routers.post('/filtersBuild', filtersBuild.buildFilters)

routers.post('/empresasAbertas', get_empresasAbertas.getEmpresasAbertas)
routers.post('/empresasAtivas', get_empresasAtivas.getEmpresasAtivas)

module.exports = routers