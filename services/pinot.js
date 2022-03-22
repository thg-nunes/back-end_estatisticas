const axios = require('axios');

const getPinotData = async (query) => {
    const headers = {"content-type": "application/json"};
    const body = {"sql": query};

    const response = await axios.post('http://179.127.13.245:8099/query/sql', body, {
        headers: headers
    });
    
    return response.data;
}

module.exports = getPinotData