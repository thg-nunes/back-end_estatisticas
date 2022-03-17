const getDataEmpresasAtivas = require('../gerar_query/gerar_querys_empresas_ativas')

module.exports = {
  async getEmpresasAtivas(req, res){

    const response = await getDataEmpresasAtivas(req.body.classificacao, req.body.filtros, res)
    return response
  }
}
