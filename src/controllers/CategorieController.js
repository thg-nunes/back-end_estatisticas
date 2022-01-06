const Categorie = require('../models/Categorie');

module.exports = {
    async store(req, res){
        const { name, color } = req.body;

        const categorie = await Categorie.create({
            name,
            color,
        });
        
        return res.json(categorie);
    },
    async show(req, res){        
        Categorie.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },
};