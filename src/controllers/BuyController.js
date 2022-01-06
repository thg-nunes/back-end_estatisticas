const Buy = require('../models/Buy');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { categ_id } = req.params;
        const { local_id, product, price, date, parcels, card_id } = req.body;
        let buy;
        
        if(card_id != ""){
            buy = await Buy.create({
                product,
                price,
                date,
                parcels,
                categ: categ_id,
                card: card_id,
                user: user_id
            });
        }else{
            buy = await Buy.create({
                product,
                price,
                date,
                parcels,
                categ: categ_id,
                user: user_id
            });
        }
        return res.json({buy, local_id});
    },
    
    async show(req, res){
        const { user_id } = req.headers;

        Buy.find({user: user_id}).sort('date').exec(function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },

    async delete(req, res){
        const{ user_id } = req.headers;
        const{ buy_id } = req.params;

        Buy.deleteOne({ user: user_id, _id: buy_id }, function(err){
            if(err)
                return res.status(500).send("A exclusão não pode ser realizada.");
            else
                return res.status(200).send("Exclusão realizada com sucesso.");
        });
    }
};