const getFilterData = require('../../helper/filterData');
const filterBuildData = require('../../helper/filterQueryBuild');

module.exports = {
  async getNatureza(req, res) {
    
    const query = filterBuildData.FilterQueryBuild('natureza', req.body)
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
