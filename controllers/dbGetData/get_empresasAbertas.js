const forma_query = require('../gerar_query')

module.exports = {
  async getEmpresasAbertas(req, res){

    const response = await forma_query(req.body.classificacao, req.body.filtros)
    return response
  }
}
