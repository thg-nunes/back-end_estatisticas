const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const FuelSchema = new mongoose.Schema({
    l_price: Number,
    price: Number,
    qtd_l: Number,
    km: Number,
    date: Date,
    gas_station: String,
    parcels: Number,
    vehicle: {
        type: Number, //salva o id do usuario em especifico
        ref: 'Vehicle'
    },
    card: {
        type: Number, //salva o id do usuario em especifico
        ref: 'Card',
        required: false,
    },
    user: {
        type: Number, //salva o id do usuario em especifico
        ref: 'User'
    },    
});

FuelSchema.plugin(autoIncrement.plugin, 'Fuel');
module.exports = mongoose.model('Fuel', FuelSchema);