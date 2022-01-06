const Buy = require('../models/Buy');

module.exports = {
    async show(req, res){
        const {user_id} = req.headers;
        const buys = await Buy.find({user : user_id})
        
        return res.json(buys);
    }
}