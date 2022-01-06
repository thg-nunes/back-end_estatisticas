const Card = require('../models/Card');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { local_id, nickname, day_venc } = req.body;

        const card = await Card.create({
            nickname,
            day_venc,
            user: user_id
        });
        
        return res.json({card, local_id});
    },

    async show(req, res){
        const { user_id } = req.headers;

        await Card.find({user: user_id}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    }
};