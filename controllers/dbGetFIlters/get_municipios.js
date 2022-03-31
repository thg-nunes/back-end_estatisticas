const getFilterData = require('../../helper/filterData');

module.exports = {
  async getMunicipios(req, res){
    const query = "select distinct municipio_empresa from statistical order by municipio_empresa limit 1420";
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
