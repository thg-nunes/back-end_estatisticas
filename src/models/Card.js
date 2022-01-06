const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const CardSchema = new mongoose.Schema({
    nickname: String,
    day_venc: Number,
    user: {
        type: Number,
        ref: 'User'
    },
});

CardSchema.plugin(autoIncrement.plugin, 'Card');
module.exports = mongoose.model('Card', CardSchema);