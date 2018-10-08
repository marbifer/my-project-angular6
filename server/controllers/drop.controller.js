const Dropdown = require('../models/dropdown'); // Acá puedo consultar a la BD porque en models está el modelo de datos

const dropCtrl = {};

// Acá se hacen las consultas a la base de datos
dropCtrl.getDataDropdown = async (req, res, next) => {
    const dataDropdown = await Dropdown.find(); // Dropdown es la colección de la BD
    res.json(dataDropdown);
}

dropCtrl.postDataDropdown = async (req, res) => {
    const dataDropdown = new Dropdown(req.body);
    await dataDropdown.save();
    res.json({
        status: 'Dropdown saved'
    });
}

/* dropCtrl.searchCorreo = async (req, res) => {
    // Para encontrar un id específico: 
    const dataReference = await Dropdown.findById(req.params.id);
    res.json(dataReference);
}

dropCtrl.editProfileCorreo = async (req, res) => {
    const { id } = req.params; // Obtener el id desde req.params
    const dataReference = {

        // Acá irían los datos del form de la sección perfil: nombre, apellido, email, documento, etc.
        select: req.body.select,
        code: req.body.code.code2,
        currency: req.body.currency
    };
    await Dropdown.findByIdAndUpdate(id, { $set: dataReference }, { new: true }); // $set es para decirle qué datos quiero actualizar
    res.json({ status: 'Dropdown Updated' });
}

dropCtrl.deleteReference = async (req, res) => {
    await Dropdown.findByIdAndRemove(req.params.id);
    res.json({ status: 'Dropdown Deleted' });
};*/

module.exports = dropCtrl;
