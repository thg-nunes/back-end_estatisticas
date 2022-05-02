const getFilterData = require('../../helper/filterData');
const filterBuildData = require('../../helper/filterQueryBuild');

module.exports = {
  async getSecaoAtividade(req, res) {
    delete req.body.secao_atividade
    const query = filterBuildData.FilterQueryBuild('secao_atividade', req.body)
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
