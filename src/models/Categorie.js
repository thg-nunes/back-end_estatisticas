const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const CategorieSchema = new mongoose.Schema({
    name: String,
    color: String,
});

CategorieSchema.plugin(autoIncrement.plugin, 'Categorie');
module.exports = mongoose.model('Categorie', CategorieSchema);