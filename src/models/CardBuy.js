const mongoose = require('mongoose')

const CardBuySchema = new mongoose.Schema({
    product: String,
    price: Number,
    date: Date,
    parcels: Number,
    owner: String,
    card: {
        type: mongoose.Schema.Types.ObjectId, //salva o id do usuario em especifico
        ref: 'Card'
    }
});

module.exports = mongoose.model('CardBuy', CardBuySchema);