const forma_query = (classificacao, filtros) => {

  if(filtros == undefined || filtros == null || filtros.state == undefined || filtros.state == null)
  return []

  const apelido_coluna_1 = 'natureza_empresa'
  const apelido_coluna_2 = 'municipio'
  const apelido_coluna_3 = 'atividade'
  let apelido_tabela = ''
  let allFiltersAnual = []
  let otherFiltersAnual = ''

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
          filters += `inicio_atividades between '${filtros.state[key]}-01-01' and '${filtros.state[key]}-12-31' group by ${classificacao} ${orderBy} limit 700000`
          break
        default:
          if(typeof filtros.state[key] == 'object' &&   filtros.state[key].length > 1){
            allFiltersAnual.push(filtros.state[key])

            filtros.state[key].map((element, index) => {
              index !== 0 ? otherFiltersAnual += ` or ${key} = '${element.Country}' ${index == filtros.state[key].length - 1 ? ') and ' : ''} ` : otherFiltersAnual += `(${key} = '${element.Country}' `
            })
            filters = 'where ' + otherFiltersAnual
            break
          } else {
            filters += `${key} = '${filtros.state[key]}' and `
            break
          }
      }
    }
  }
  return  query + filters
}

module.exports = forma_query