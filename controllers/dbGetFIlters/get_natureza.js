const getFilterData = require('../../helper/filterData');

module.exports = {
  async getNatureza(req, res){
    const query = "select distinct natureza from statistical where setor != 'null' limit 50";
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
