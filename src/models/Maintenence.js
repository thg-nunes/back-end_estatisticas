const mongoose = require('mongoose')

const MaintenenceSchema = new mongoose.Schema({
    product: String,
    price: Number,
    date: Date,
    parcels: Number,
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    labor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Labor'
    }
});

module.exports = mongoose.model('Maintenence', MaintenenceSchema);