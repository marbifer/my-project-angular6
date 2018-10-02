const Reference = require('../models/reference'); // Acá puedo consultar a la BD porque en models está el modelo de datos

const referenceCtrl = {};

// Acá se hacen las consultas a la base de datos

referenceCtrl.getDataFirstForm = async (req, res) => {
    const dataReferences = await Reference.find(); // References es la colección de la BD
    res.json(dataReferences);
}

referenceCtrl.searchCorreo = async (req, res) => {
    const dataReferences = await Reference.findById(req.params.id);
    res.json(dataReferences);
}

referenceCtrl.createContactCorreo = (req, res) => {
    res.json({
        status: 'createContactCorreo'
    });
}

referenceCtrl.registerCorreo = (req, res) => {
    res.json({
        status: 'registerCorreo'
    });
}

module.exports = referenceCtrl;
