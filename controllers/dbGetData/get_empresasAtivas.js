const request = require('request')

module.exports = {
  async getEmpresasAtivas(req, res){

    const getDataEmpresasAtivas = async (classificacao, filtros) => {
      if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
        return []
    
      const apelido_coluna_1 = 'natureza_empresa'
      const apelido_coluna_2 = 'municipio'
      const apelido_coluna_3 = 'atividade'
      let apelido_tabela = ''
      let orderBy = ''
      let otherFiltersEmpresasAtivas = ''
      let allFiltersEmpresasAtivas = []
    
      switch (classificacao) {
        case 'natureza':
          apelido_tabela = `as ${apelido_coluna_1}`
          orderBy = `order by ${apelido_coluna_1} desc`
          break
        case 'municipio_empresa':
          apelido_tabela = `as ${apelido_coluna_2}`
          orderBy = `order by ${apelido_coluna_2} desc`
          break
        case 'secao_atividade':
          apelido_tabela = `as ${apelido_coluna_3}`
          orderBy = `order by ${apelido_coluna_3} desc`
          break
        default:
          apelido_tabela = `empresas_ativas`
          orderBy = `order by ${apelido_tabela} desc`
          break
      }
    
      let query = `select ${classificacao}, count(*) ${apelido_tabela} from statistical `
      let filters = ' where '
      const initial_date = new Date()
      const date = initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1
    
      for (const key in filtros.state) {
        
        if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
        if(filtros.state[key] == 'ano' && filtros.state[key] == '' ) filtros.state[key] += date
    
        if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
          switch (key) {
            case 'ano':
              filters += `(situacao_siarco = 'REGISTRO ATIVO' or situacao_siarco = 'REGISTRO ATIVO PROVISÓRIO') and ${classificacao} != 'null' group by ${classificacao} ${orderBy} limit 700000`
              break
            default:
              if(typeof filtros.state[key] == 'object' &&   filtros.state[key].length > 1){
                allFiltersEmpresasAtivas.push(filtros.state[key])
    
                filtros.state[key].map((element, index) => {
                  index !== 0 ? otherFiltersEmpresasAtivas += `or ${key} = '${element.Country}' ${index == filtros.state[key].length - 1 ? ') and ' : ''}` : otherFiltersEmpresasAtivas += `(${key} = '${element.Country}' `
                })
                filters = 'where ' + otherFiltersEmpresasAtivas
                break
              } else {
                filters += `${key} = '${filtros.state[key]}' and `
                break
              }
          }
        }
      }

      request({
        url: 'http://179.127.13.245:8099/query/sql',
        method :"POST",
        headers : {
          "content-type": "application/json",
        },
        body: {
          "sql": query + filters
        },
        json: true
      },
      function (err, httpResponse, body) {
        return res.json(body)
      })
    }    
    const response = await getDataEmpresasAtivas(req.body.classificacao, req.body.filtros)
    return response
  }
}
