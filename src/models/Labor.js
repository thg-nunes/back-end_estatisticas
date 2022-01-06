const mongoose = require('mongoose')

const LaborSchema = new mongoose.Schema({
    mech: String,
    price: Number,
    parcels: Number,
    card: {
        type: mongoose.Schema.Types.ObjectId, //salva o id do usuario em especifico
        ref: 'Card'
    },
});

module.exports = mongoose.model('Labor', LaborSchema);