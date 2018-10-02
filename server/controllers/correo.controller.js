const Correo = require('../models/correo');

const correoCtrl = {};

correoCtrl.getCorreo = (req, res) => {
    res.json({
        status: 'Primer formulario del Home va aqui'
    });
}


/* correoCtrl.getReference = async (req, res, next) => {
    const correo = await Correo.find();
   res.json(correos); 
}; */

module.exports = correoCtrl;

