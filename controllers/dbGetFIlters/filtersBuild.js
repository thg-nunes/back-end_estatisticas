const getFilterData = require('../../helper/filterData');

module.exports = {
  async buildFilters(req, res){

    const { state } = req.body
    let initial_query = `select distinct `
    let response_filters = []
    let from_table = ` from statistical where `
    
    for (const key in state) {
      switch (key) {
        default:
          if(key !== 'ano' && key !== 'empresasAbertas' && typeof state[key] === 'object') {
             state[key].forEach((filtro, index) => {
               index <= 0 ? from_table += `(${key} = '${filtro}' ${state[key].length == 1 ? ') and ' : ''}` : from_table += ` or ${key} = '${filtro} ${index == state[key].length -1 ? ') ' : ''}`
             })
            }
            console.log(`${initial_query} ${key} `)
            console.log(`${from_table}`)
          break;
      }
    }
  }
}
