const Vehicle = require('../models/Vehicle');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { local_id, name } = req.body;

        const vehicle = await Vehicle.create({
            name,
            user: user_id,
        });
        
        return res.json({vehicle, local_id});
    },

    async show(req, res){
        const { user_id } = req.headers;

        Vehicle.find({user: user_id}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },

    async delete(req, res){
        const{ user_id } = req.headers;
        const{ vehicle_id } = req.params;

        Vehicle.deleteOne({ user: user_id, _id: vehicle_id }, function(err){
            if(err)
                return res.status(500).send("A exclusão não pode ser realizada.");
            else
                return res.status(200).send("Exclusão realizada com sucesso.");
        });
    }
};