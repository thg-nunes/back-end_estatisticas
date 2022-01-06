const Maintenence = require('../models/Maintenence');

module.exports = {
    async store(req, res){
        const { vehicle_id, card_id, labor_id } = req.params;
        const { product, price, date, parcels } = req.body;

        const maintenence = await Maintenence.create({
            product,
            price,
            date,
            parcels,
            vehicle_id,
            card_id,
            labor_id,
        });
        
        return res.json(maintenence);
    },
};