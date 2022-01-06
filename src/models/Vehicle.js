const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const VehicleSchema = new mongoose.Schema({
    name: String,
    user: {
        type: Number,
        ref: 'User'
    },
});

VehicleSchema.plugin(autoIncrement.plugin, 'Vehicle');
module.exports = mongoose.model('Vehicle', VehicleSchema);