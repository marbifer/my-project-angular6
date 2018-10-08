const mongoose = require('mongoose');
const { Schema } = mongoose;

const Dropdownchema = new Schema({
    categories: [String]
});

module.exports = mongoose.model('Dropdown', Dropdownchema);