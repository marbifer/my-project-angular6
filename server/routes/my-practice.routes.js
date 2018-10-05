const express = require('express');
const router = express.Router();

const myCorreo = require('../controllers/correo.controller');
// const myPayments = require('../controllers/payments.controller');

router.get('/', myCorreo.getDataFirstForm); // Datos pre cargados del primer form del home
router.post('/', myCorreo.postDataFirstForm); // Mandar Datos del primer form del home a la BD
router.get('/:id', myCorreo.searchCorreo); // Traer por Id en la BD
router.delete('/:id', myCorreo.deleteReference); // Eliminar Datos del form del Home.
// router.post('/', myCorreo.createContactCorreo); // Form de Contacto, sugerencias, reclamos
// router.post('/', myCorreo.registerCorreo); // Form de registro
// router.get('/:id', myCorreo.editProfileCorreo); // Datos pre cargados del form de perfil
router.put('/:id', myCorreo.editProfileCorreo); // Actualizar o editar Datos pre cargados del form de perfil
// router.delete('/:id', myCorreo.deleteProfile); // Eliminar Datos del form de perfil(opción opcional para practicar el delete con mongo).

module.exports = router;