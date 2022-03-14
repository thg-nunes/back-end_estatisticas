const request = require('request')

module.exports = {
  async getDescricaoAtividade(req, res){
    request({
      url: 'http://179.127.13.245:8099/query/sql',
      method :"POST",
      headers : {
        "content-type": "application/json",
      },
      body: {
        "sql": "select distinct descricao_atividade from statistical where setor != 'null' limit 1500"
      },
      json: true
    },
    function (err, httpResponse, body) {
      return res.json(body)
    })
  }
};
