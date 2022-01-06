var request = require('request');

module.exports = {
    async show(req, res){
        request({
            url: 'http://179.127.13.245:8099/query/sql',
            method :"POST",
            headers : {
                "content-type": "application/json",
            },
            body: {
                "sql": "select * from statistical limit 10"
            },
            json: true
        },
        function (err, httpResponse, body) {
            console.log(err, body);
        })
    }
};