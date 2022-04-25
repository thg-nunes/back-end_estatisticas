const getFilterData = require('../../helper/filterData');
const build_query = require('../../helper/queryBuild');

module.exports = {
  async getDescricaoAtividade(req, res){
    delete req.body.classificacao;
    delete req.body.descricao_atividade;
    
    const query = build_query(req.body, "descricao_atividade");
    
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
