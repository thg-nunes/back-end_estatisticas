const request = require('request')

module.exports = {
  async getEmpresasAbertas(req, res){

    const getDadoEmpresasAbertas = async (classificacao, filtros) => {
      if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
      return []
    
      const apelido_coluna_1 = 'natureza_empresa'
      const apelido_coluna_2 = 'municipio'
      let apelido_tabela = ''
      let orderBy = ''
    
      switch (classificacao) {
        case 'natureza':
          apelido_tabela = `as ${apelido_coluna_1}`
          orderBy = `order by ${apelido_coluna_1} desc`
          break
        case 'municipio_empresa':
          apelido_tabela = `as ${apelido_coluna_2}`
          orderBy = `order by ${apelido_coluna_2} desc`
          break
        default:
          apelido_tabela = `empresas_abertas`
          orderBy = `order by ${apelido_tabela} desc`
          break
      }
    
      let query = `select ${classificacao}, count(*) ${apelido_tabela} from statistical `
      let otherFilters = ''
      let filters = ' where '
      let allFilters = []
    
      for (const key in filtros.state) {
        if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
        
        if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
          
          switch (key) {
            case 'ano':
              filters += `inicio_atividades between '${filtros.state[key]}-01-01' and '${filtros.state[key]}-12-31' group by ${classificacao} ${orderBy} limit 700000`
              break
            default:
              if(typeof filtros.state[key] == 'object' &&   filtros.state[key].length > 1){
                allFilters.push(filtros.state[key])
    
                filtros.state[key].map((element, index) => {
                  index !== 0 ? otherFilters += `or ${key} = '${element.Country}' ${index == filtros.state[key].length - 1 ? ') and ' : ''}` : otherFilters += `(${key} = '${element.Country}' `
                })
                filters = 'where ' + otherFilters
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
    const response = await getDadoEmpresasAbertas(req.body.classificacao, req.body.filtros)
    return response
  }
}
