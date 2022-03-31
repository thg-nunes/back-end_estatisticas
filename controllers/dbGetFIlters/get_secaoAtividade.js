const getFilterData = require('../../helper/filterData');

module.exports = {
  async getSecaoAtividade(req, res){
    const query = "select distinct secao_atividade secao_atividade from statistical where secao_atividade != 'null' limit 50";
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
