const User = require('../models/User')

module.exports = {
    async store(req, res){
        const { access, password, admin } = req.body;
        
        let user = await User.findOne({ access });

        if(!user){
            user = await User.create({ access, password, admin });
        }
        
        return res.json(user);
    },

    async login(req, res){
        const { access, password } = req.body;

        let user = await User.findOne({access});        
    
        if(user.password == password){
            return res.json(user);
        }
        
        return res.status(400).json({error: "Usuário ou Senha inválido."});
    }
};