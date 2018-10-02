const mongoose = require('mongoose');
const { Schema } = mongoose;

const CorreoSchema = new Schema({
    select: [String],
    code: { type: Number },
    currency: [String]
});

/* const correoSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true}
}); */

module.exports = mongoose.model('Correo', CorreoSchema);