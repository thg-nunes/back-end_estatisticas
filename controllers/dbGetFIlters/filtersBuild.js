module.exports = {
  async buildFilters(req, res){

    const { state } = req.body
    let where_for_full_filters = 'where '
    
    for (const key in state) {
      let where_to_empty_filters = ``
      let initial_query = 'select distinct '
      
      switch (key) {
        default:
          if(key !== 'ano' && key !== 'empresasAbertas' && typeof state[key] == 'object') {
          // aqui forma as querys de busca para os filtros enquanto não tem nada selecionado
            initial_query += `${key} from statistical where ${key} != 'null' order by ${key} limit 1500 `
            state[key].forEach((filtro, index) => {
              index <= 0 ? where_for_full_filters += `(${key} = '${filtro}' ${state[key].length == 1 ? ') and ' : ''}` : where_for_full_filters += ` or ${key} = '${filtro} ${index == state[key].length -1 ? ')' : ''}`
            })
            break
          }
          if (key !== 'ano' && key !== 'empresasAbertas') {
            if(state[key] == '') {
              initial_query += `${key} from statistical `
              where_to_empty_filters += `${where_for_full_filters !== 'where ' ? `${key} != 'null' and ${where_for_full_filters} order by ${key} limit 1500` :`where ${key} != 'null' order by ${key} limit 1500 `}`
              break
            }
          }
        }
      }
    }
}
