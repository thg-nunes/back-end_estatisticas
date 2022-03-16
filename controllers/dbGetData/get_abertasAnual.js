const request = require('request')
const forma_query = require('../gerar_query')

module.exports = {
  async getAbertasAnual(req, res){

    const query = await forma_query(req.body.classificacao, req.body.filtros)

    request({
      url: 'http://179.127.13.245:8099/query/sql',
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        "sql": query
      },
      json: true
    },
    function (err, httpResponse, body) {
      return res.json(body)
    })
  }
};
