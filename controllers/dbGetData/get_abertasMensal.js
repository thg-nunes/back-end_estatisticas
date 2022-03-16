const getAbertasMes = require('../gerar_query/gerar_query_mensal')

module.exports = {
  async getAbertasMensal(req, res){
    
    const response = await getAbertasMes(req.body.ano, req.body.filtros)
    return response
  }
};
