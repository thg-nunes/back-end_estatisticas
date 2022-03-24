const getFilterData = require('../../helper/filterData');

module.exports = {
  async getSetor(req, res){
    const query = "select distinct setor from statistical where setor != 'null'";
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
