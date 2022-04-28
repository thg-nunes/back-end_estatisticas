const getFilterData = require('../../helper/filterData');
const filterBuildData = require('../../helper/filterQueryBuild');

module.exports = {
  async getSetor(req, res) {

    const query = filterBuildData.FilterQueryBuild('setor', req.body)
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
