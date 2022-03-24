const getFilterData = require('../../helper/filterData');

module.exports = {
  async getDescricaoAtividade(req, res){
    const query = "select distinct descricao_atividade from statistical where setor != 'null' limit 1500";
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
