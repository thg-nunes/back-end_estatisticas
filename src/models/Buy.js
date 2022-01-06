const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const BuySchema = new mongoose.Schema({
    product: String,
    price: Number,
    date: Date,
    parcels: Number,
    categ: {
        type: Number, //salva o id do usuario em especifico
        ref: 'Categorie'
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

BuySchema.plugin(autoIncrement.plugin, 'Buy');
module.exports = mongoose.model('Buy', BuySchema);