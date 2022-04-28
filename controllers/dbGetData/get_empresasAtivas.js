const getElementsData = require('../../helper/elementsData');
const build_query = require('../../helper/queryBuild')

module.exports = {
  async getEmpresasAtivas(req, res){
    const query = build_query(req.body)
    const response = await getElementsData(query.final_query);
    
    return res.json(response);
  }
};