const Reference = require('../models/reference'); // Acá puedo consultar a la BD porque en models está el modelo de datos
const Payments = require('../models/payments');

const paymentsCtrl = {};

// Acá se hacen las consultas a la base de datos
paymentsCtrl.paymentsCorreo = async (req, res) => {

    const { id } = req.params;
    const payments = await Payments.findById(id);
    res.json(payments);

}

module.exports = paymentsCtrl;
