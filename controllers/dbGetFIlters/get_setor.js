const getPinotData = require('../../services/pinot');

module.exports = {
  async getSetor(req, res){
  
    const query = "select distinct setor from statistical where setor != 'null'";
    const data = await getPinotData(query);
    var values = [];
    
    data.resultTable.rows.forEach(element => {
      values.push(element);
    });

    const response = {
                      names: data.resultTable.dataSchema.columnNames, 
                      values: values, 
                      time: data.timeUsedMs, 
                      length: data.numRowsResultSet
                    }
    
    return res.json(response);
  }
};
