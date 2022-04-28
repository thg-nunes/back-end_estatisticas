const express = require("express")

const routers = express.Router()

const get_municipios = require('./controllers/dbGetFilters/get_municipios')
const get_porte = require('./controllers/dbGetFilters/get_porte')
const get_setor = require('./controllers/dbGetFilters/get_setor')
const get_natureza = require('./controllers/dbGetFilters/get_natureza')
const get_descricaoAtividade = require('./controllers/dbGetFilters/get_descricaoAtividade')
const get_secaoAtividade = require('./controllers/dbGetFilters/get_secaoAtividade')

const get_empresasAbertas = require('./controllers/dbGetData/get_empresasAbertas')
const get_empresasAtivas = require('./controllers/dbGetData/get_empresasAtivas')

routers.post('/municipios', get_municipios.getMunicipios)
routers.post('/porte', get_porte.getPorte)
routers.post('/setor', get_setor.getSetor)
routers.post('/natureza', get_natureza.getNatureza)
routers.post('/descricaoAtividade', get_descricaoAtividade.getDescricaoAtividade)
routers.post('/secaoAtividade', get_secaoAtividade.getSecaoAtividade)

routers.post('/empresasAbertas', get_empresasAbertas.getEmpresasAbertas)
routers.post('/empresasAtivas', get_empresasAtivas.getEmpresasAtivas)

module.exports = routers