const Reference = require('../models/reference'); // Acá puedo consultar a la BD porque en models está el modelo de datos

const referenceCtrl = {};

// Acá se hacen las consultas a la base de datos
referenceCtrl.getDataFirstForm = async (req, res, next) => {
    const dataReferences = await Reference.find(); // References es la colección de la BD
    res.json(dataReferences);
}

referenceCtrl.postDataFirstForm = async (req, res) => {
    const dataReference = new Reference(req.body);
    await dataReference.save();
    res.json({
        status: 'Reference saved'
    });
}

referenceCtrl.searchCorreo = async (req, res) => {
    // Para encontrar un id específico: 
    const dataReference = await Reference.findById(req.params.id);
    res.json(dataReference);
}

/* referenceCtrl.createContactCorreo = (req, res) => {
    res.json({
        status: 'createContactCorreo'
    });
}

referenceCtrl.registerCorreo = (req, res) => {
    res.json({
        status: 'registerCorreo'
    });
} */

referenceCtrl.editProfileCorreo = async (req, res) => {
    const { id } = req.params; // Obtener el id desde req.params
    const dataReference = {

        // Acá irían los datos del form de la sección perfil: nombre, apellido, email, documento, etc.
        select: req.body.select,
        code: req.body.code.code2,
        currency: req.body.currency
    };
    await Reference.findByIdAndUpdate(id, { $set: dataReference }, { new: true }); // $set es para decirle qué datos quiero actualizar
    res.json({ status: 'Reference Updated' });
}

referenceCtrl.deleteProfile = async (req, res) => {
    await Reference.findByIdAndRemove(req.params.id);
    res.json({ status: 'Reference Deleted' });
};

module.exports = referenceCtrl;
