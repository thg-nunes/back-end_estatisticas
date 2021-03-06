
const build_query = (filtros, distinct_filtro="") => {
  if(filtros == undefined || filtros == null)
    return [];
  
  var final_query = "";
  let filterComplement = "";
  let columnNickname = "";
  let classificacao = ""
  let whereToFilters = "";
  let filters = ' where ';

  if(distinct_filtro === ""){
    classificacao = filtros.classificacao;

    if (classificacao != undefined && classificacao != null && classificacao !== "abertas_mes"){
      switch(classificacao){
        case "natureza":
        case "municipio_empresa":
        case "descricao_atividade":
        case "porte":
        case "setor":
          columnNickname = `qtd_${classificacao}`;
          orderBy = `order by ${columnNickname} desc`;
          filters += `${filtros.classificacao} != 'null' and `
          break
      }
    }
    if(columnNickname === "")
      var query = `select count(*) from statistical `;
    else
      var query = `select ${classificacao}, count(*) as ${columnNickname} from statistical `;
  }else{
    classificacao = distinct_filtro;
    var query = `select distinct ${distinct_filtro} from statistical `;
  }

  const initial_date = new Date();
  const date = initial_date.getMonth() >= 2 ? initial_date.getFullYear() : initial_date.getFullYear()-1;
  const month = filtros.mes !== '' ? filtros.mes : initial_date.getMonth() + 1

  for (const key in filtros) {
    
    if(filtros[key] == 'ano' && filtros[key] == '')
      filtros[key] += date;

    if((key !== 'empresasAbertas' && key !== 'classificacao' && key !== 'mes') && filtros[key] !== ''){
      switch (key) {
        case 'ano':
          if(classificacao !== "abertas_mes")
            if(filtros['empresasAbertas'])
              if(columnNickname === "")
                filters += `inicio_atividades between '${filtros[key]}-01-01' and '${filtros[key]}-${month.toString().padStart(2, '0')}-31' limit 700000`;
              else
                filtros.mes !== '' ?
                filters += `inicio_atividades between '${filtros[key]}-${filtros.mes.toString().padStart(2, '0')}-01' and '${filtros[key]}-${filtros.mes.toString().padStart(2, '0')}-31' group by ${classificacao} ${orderBy} limit 700000` :
                filters += `inicio_atividades between '${filtros[key]}-01-01' and '${filtros[key]}-${filtros[key] < initial_date.getFullYear() ? '12' :  month.toString().padStart(2, '0')
                }-31' group by ${classificacao} ${orderBy} limit 700000`
            else
              if(columnNickname === "")
                filters += `(situacao_siarco = 'REGISTRO ATIVO' or situacao_siarco = 'REGISTRO ATIVO PROVIS??RIO') limit 700000`;
              else
                filters += `(situacao_siarco = 'REGISTRO ATIVO' or situacao_siarco = 'REGISTRO ATIVO PROVIS??RIO') and ${classificacao} != 'null' group by ${classificacao} ${orderBy} limit 700000`;
          break
        default:
          if(typeof filtros[key] == 'object' && filtros[key].length > 1){
            filtros[key].map((element, index) => {
              index !== 0 ? filterComplement += ` or ${key} = '${element}' ${index == filtros[key].length - 1 ? ') and ' : ''} ` : filterComplement += `(${key} = '${element}' `;
            })           
            filters = `where
              ${filtros.classificacao != undefined && filtros.classificacao != null && filtros.classificacao !== "abertas_mes" && filtros.classificacao != '' ?
                `${filtros.classificacao} != 'null' and ` : ''
              } ` + filterComplement;
            whereToFilters += `${filterComplement}`;
          } else {
            filters += `${key} != 'null' and ${key} = '${filtros[key]}' and `;
            filters += `${key} = '${filtros[key]}' and `;
            whereToFilters += `${key} = '${filtros[key]}' and `;
          }
          break
      }
    }
  }

  if(classificacao !== "abertas_mes")
    final_query = query + filters;
  else{
    var max_date = `${filtros["ano"]}-12-31`
    if(initial_date.getFullYear() == filtros["ano"])
      var max_date = `${filtros["ano"]}-${month.toString().padStart(2, '0')}-31`    
    
    final_query = `select month(FromDateTime(inicio_atividades, 'YYYY-MM-dd'), 'UTC') AS month, count(month) FROM statistical ${filters} inicio_atividades between '${filtros["ano"]}-01-01' and '${max_date}' group by month limit 700000`
  }

  return ({final_query, whereToFilters});
}

module.exports = build_query