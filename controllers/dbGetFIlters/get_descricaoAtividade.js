const getFilterData = require('../../helper/filterData');
const filterBuildData = require('../../helper/filterQueryBuild');

module.exports = {
  async getDescricaoAtividade(req, res) {
    delete req.body.descricao_atividade
    const query = filterBuildData.FilterQueryBuild('descricao_atividade', req.body)
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
