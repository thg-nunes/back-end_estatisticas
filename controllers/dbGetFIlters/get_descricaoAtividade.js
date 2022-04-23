const getFilterData = require('../../helper/filterData');
const build_query = require('../../helper/queryBuild');

module.exports = {
  async getDescricaoAtividade(req, res){
    // const query = "select distinct descricao_atividade from statistical where setor != 'null' limit 1500";
    delete req.body.classificacao;
    delete req.body.descricao_atividade;
    
    const query = build_query(req.body, "descricao_atividade");
    console.log(query);
    
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
