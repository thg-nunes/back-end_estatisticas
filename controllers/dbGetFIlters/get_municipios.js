const getFilterData = require('../../helper/filterData');
const build_query = require('../../helper/queryBuild');

module.exports = {
  async getMunicipios(req, res){
    delete req.body.classificacao;
    delete req.body.municipio_empresa;
    
    console.log(req.body)
    const query = build_query(req.body, "municipio_empresa");
    console.log(query);
    
    const response = await getFilterData(query);
    
    return res.json(response);
  }
};
