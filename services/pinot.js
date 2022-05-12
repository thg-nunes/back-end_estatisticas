const axios = require('axios');

const getPinotData = async (query) => {
    const headers = {"content-type": "application/json"};
    const body = {"sql": query};
    
    const response = await axios.post(process.env.PINOT_ENDPOINT, body, {
        headers: headers
    });
    
    return response.data;
}

module.exports = getPinotData