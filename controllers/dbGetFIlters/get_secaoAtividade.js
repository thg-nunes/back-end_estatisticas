const request = require('request')

module.exports = {
  async getSecaoAtividade(req, res){
    request({
      url: 'http://179.127.13.245:8099/query/sql',
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        "sql": "select distinct secao_atividade secao_atividade from statistical where secao_atividade != 'null' limit 50"
      },
      json: true
    },
    function (err, httpResponse, body) {
      return res.json(body)
    })
  }
};
