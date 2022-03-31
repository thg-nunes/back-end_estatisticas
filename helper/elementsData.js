const getPinotData = require('../services/pinot');

const getElementsData = async(query) => {
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
    
    return response;
}

module.exports = getElementsData;