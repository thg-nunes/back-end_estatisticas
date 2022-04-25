const getFilterData = require('../../helper/filterData');
const build_query = require('../../helper/queryBuild');

module.exports = {
  async getSecaoAtividade(req, res){
    delete req.body.classificacao;
    delete req.body.secao_atividade;

    console.log(req.body)
    const query = build_query(req.body, "secao_atividade");
    console.log(query);
    
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
