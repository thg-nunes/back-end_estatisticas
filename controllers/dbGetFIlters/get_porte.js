const getFilterData = require('../../helper/filterData');

module.exports = {
  async getPorte(req, res){
    const query = "select distinct porte from statistical where setor != 'null'";
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
