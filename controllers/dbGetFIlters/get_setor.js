const getFilterData = require('../../helper/filterData');
const build_query = require('../../helper/queryBuild');

module.exports = {
  async getSetor(req, res){
    delete req.body.classificacao;
    delete req.body.setor;

    console.log(req.body)
    const query = build_query(req.body, "setor");
    console.log(query);
    
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
