const Fuel = require('../models/Fuel');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { vechicle_id } = req.params;
        const { local_id, l_price, price, qtd_l, km, date, gas_station, parcels, card_id } = req.body;
        let fuel;
        
        if(card_id != "")
            fuel = await Fuel.create({
                l_price,
                price,
                qtd_l,
                km,
                date,
                gas_station,
                parcels,
                vehicle: vechicle_id,
                card: card_id,
                user: user_id,
            });
        else
            fuel = await Fuel.create({
                l_price,
                price,
                qtd_l,
                km,
                date,
                gas_station,
                parcels,
                vehicle: vechicle_id,
                user: user_id,
            });
        
        return res.json({fuel, local_id});
    },

    async show(req, res){
        const { user_id } = req.headers;
        const {vehicle_id} = req.params;

        Fuel.find({vehicle: vehicle_id, user: user_id}).sort('date').exec(function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },

    async delete(req, res){
        const{ user_id } = req.headers;
        const{ fuel_id } = req.params;

        Fuel.deleteOne({ user: user_id, _id: fuel_id }, function(err){
            if(err)
                return res.status(500).send("A exclusão não pode ser realizada.");
            else
                return res.status(200).send("Exclusão realizada com sucesso.");
        });
    }
};
