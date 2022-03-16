const request = require("request")

const getAbertasMes = (ano, filtros, res) => {
    
  if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
  return []

  let query_ano = ''
  let query = `select count(*) from statistical `
  let filters = ' where '
  let otherFiltersMensal = ''
  let allFiltersMensal = []

  let arrDatasFIlters = []

  for (const key in filtros.state) {
    if(filtros.state[key] == 'Selecionar') filtros.state[key] = ''
    if(filtros.state[key] !== '') arrDatasFIlters.push(filtros.state[key])
    
    if(key !== 'empresasAbertas' && filtros.state[key] !== ''){
      switch (key) {
        case 'ano':
            query_ano += `select month(FromDateTime(inicio_atividades, 'YYYY-MM-dd'), 'UTC') AS month, count(month) FROM statistical ${filters} inicio_atividades between '${ano}-01-01' and '${ano}-12-31' group by month limit 700000`
            break
        default:
          if(typeof filtros.state[key] == 'object' &&   filtros.state[key].length > 1){
            allFiltersMensal.push(filtros.state[key])

            filtros.state[key].map((element, index) => {
              index !== 0 ? otherFiltersMensal += ` or ${key} = '${element.Country}' ${index == filtros.state[key].length - 1 ? ') and ' : ''} ` : otherFiltersMensal += `(${key} = '${element.Country}' `
            })
            filters = 'where ' + otherFiltersMensal
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
      "sql": query_ano !== '' ? query_ano : query + filters
    },
    json: true
  },
  function (err, httpResponse, body) {
    return res.json(body)
  })
}

module.exports = getAbertasMes