const Labor = require('../models/Labor');

module.exports = {
    async store(req, res){
        const { card_id } = req.params;
        const { mech, price, parcels } = req.body;

        const labor = await Labor.create({
            mech,
            price,
            parcels,
            card_id,
        });
        
        return res.json(labor);
    },
};