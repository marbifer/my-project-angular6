const express = require('express');
const router = express.Router();

const myCorreo = require('../controllers/correo.controller');
// const myPayments = require('../controllers/payments.controller');

router.get('/', myCorreo.getDataFirstForm); // Datos pre cargados del primer form del home
router.post('/', myCorreo.postDataFirstForm); // Mandar Datos del primer form del home a la BD
router.get('/:id', myCorreo.searchCorreo); // Botón Buscar del form del home
// router.post('/', myCorreo.createContactCorreo); // Form de Contacto, sugerencias, reclamos
// router.post('/', myCorreo.registerCorreo); // Form de registro
// router.get('/:id', myCorreo.editProfileCorreo); // Datos pre cargados del form de perfil
router.put('/:id', myCorreo.editProfileCorreo); // Actualizar o editar Datos pre cargados del form de perfil
router.delete('/:id', myCorreo.deleteProfile); // Eliminar Datos del form de perfil(opción opcional para practicar el delete con mongo).

/* router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee); // post permite mandar datos
router.get('/:id', employee.getEmployee); //get permite obtener datos
router.put('/:id', employee.editEmployee); // put permite actualizar datos
router.delete('/:id', employee.deleteEmployee); */

module.exports = router;