const getFilterData = require('../../helper/filterData');
const filterBuildData = require('../../helper/filterQueryBuild');

module.exports = {
  async getMunicipios(req, res) {
   
    const query = filterBuildData.FilterQueryBuild('municipio_empresa', req.body)
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
