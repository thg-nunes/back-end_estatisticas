const CardBuy = require('../models/CardBuy');

module.exports = {
    async store(req, res){
        const { product, price, date, parcels, owner } = req.body;
        const { card_id } = req.params;

        const cardBuy = await CardBuy.create({
            product,
            price,
            date,
            parcels,
            owner,
            card_id
        });
        
        return res.json(cardBuy);
    },
};