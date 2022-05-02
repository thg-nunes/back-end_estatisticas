const getFilterData = require('../../helper/filterData');
const filterBuildData = require('../../helper/filterQueryBuild');

module.exports = {
  async getPorte(req, res) {
    delete req.body.porte
    const query = filterBuildData.FilterQueryBuild('porte', req.body)
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
