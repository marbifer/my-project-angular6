const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaymentsSchema = new Schema({
    payments: [{
        codePackage: Number,
        date: String,
        import: Number,
        bill: String
    }]
});

/* const correoSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true}
}); */

module.exports = mongoose.model('Payments', PaymentsSchema);