const express = require("express")

const routers = express.Router()

const get_municipios = require('./controllers/dbGetFIlters/get_municipios')
const get_porte = require('./controllers/dbGetFIlters/get_porte')
const get_setor = require('./controllers/dbGetFIlters/get_setor')
const get_natureza = require('./controllers/dbGetFIlters/get_natureza')
const get_descricaoAtividade = require('./controllers/dbGetFIlters/get_descricaoAtividade')
const get_secaoAtividade = require('./controllers/dbGetFIlters/get_secaoAtividade')
const get_abertasAnual = require('./controllers/dbGetData/get_abertasAnual')
const get_abertasMensal = require('./controllers/dbGetData/get_abertasMensal')
const get_empresasAbertas = require('./controllers/dbGetData/get_empresasAbertas')
const get_empresasAtivas = require('./controllers/dbGetData/get_empresasAtivas')

routers.get('/getMunicipios', get_municipios.getMunicipios)
routers.get('/getPorte', get_porte.getPorte)
routers.get('/getSetor', get_setor.getSetor)
routers.get('/getNatureza', get_natureza.getNatureza)
routers.get('/getDescricaoAtividade', get_descricaoAtividade.getDescricaoAtividade)
routers.get('/getSecaoAtividade', get_secaoAtividade.getSecaoAtividade)
routers.post('/getAbertasAnual', get_abertasAnual.getAbertasAnual)
routers.post('/getAbertasMensal', get_abertasMensal.getAbertasMensal)
routers.post('/getEmpresasAbertas', get_empresasAbertas.getEmpresasAbertas)
routers.post('/getEmpresasAtivas', get_empresasAtivas.getEmpresasAtivas)

module.exports = routers