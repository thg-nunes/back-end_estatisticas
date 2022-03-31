const getElementsData = require('../../helper/elementsData');
const build_query = require('../../helper/queryBuild')

module.exports = {
  async getEmpresasAbertas(req, res){
    const query = build_query(req.body)
    const response = await getElementsData(query);
    
    return res.json(response);
  }
};