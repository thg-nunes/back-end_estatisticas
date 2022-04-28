const build_query = require('./queryBuild')

module.exports = {
  FilterQueryBuild (filter, filterBody) {

    delete filterBody[filter]

    const initial_query = `select distinct ${filter} from statistical`
    const order_by = ` order by ${filter} limit 10000`
    
    const generate_filter_consult = build_query(filterBody)
    const { whereToFilters } = generate_filter_consult
  
    const finally_query = `${initial_query} where ${whereToFilters} ${filter} != 'null'${order_by}`
    return finally_query
  }
}