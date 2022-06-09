const getFilterData = require('../../helper/filterData');
const filterBuildData = require('../../helper/filterQueryBuild');

module.exports = {
  async getFilter(req, res) {
    const { filter } = req.params

    delete req.body[filter]
    const query = filterBuildData.FilterQueryBuild(filter, req.body)
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
