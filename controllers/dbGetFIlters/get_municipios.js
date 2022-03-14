const request = require('request')

module.exports = {
  async getMunicipios(req, res){
    request({
      url: 'http://179.127.13.245:8099/query/sql',
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        "sql": "select distinct municipio_empresa from statistical order by municipio_empresa limit 1420"
      },
      json: true
    },
    function (err, httpResponse, body) {
      return res.json(body)
    })
  }
};
