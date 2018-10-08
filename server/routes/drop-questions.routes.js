const express = require('express');
const router = express.Router();

const myDrop = require('../controllers/drop.controller');

router.get('/', myDrop.getDataDropdown); // Datos pre cargados del Dropdown/Sección preguntas frecuentes
router.post('/', myDrop.postDataDropdown); // Mandar Datos del del Dropdown/Sección preguntas frecuentes a la BD
// router.get('/:id', myDrop.searchCorreo); // Traer por Id en la BD
// router.delete('/:id', myDrop.deleteReference); // Eliminar Datos del Dropdown/Sección preguntas frecuentes
// router.put('/:id', myDrop.editProfileCorreo); // Actualizar o editar Datos pre cargados del Dropdown/Sección preguntas frecuentes

module.exports = router;