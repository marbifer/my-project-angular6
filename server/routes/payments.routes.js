const express = require('express');
const router = express.Router();

const myPayments = require('../controllers/payments.controller');

router.get('/', myPayments.getPayments); // Tabla de pagos del home
router.get('/:id', myPayments.searchById); // Traer por Id en la BD
router.post('/', myPayments.postPayments); // Mandar datos Tabla de pagos del home
router.post('/find', myPayments.postPaymentsFilter); // Filtra un dato en particular de Tabla de pagos del home
router.put('/:id', myPayments.editPayments); // Actualizar o editar Datos pre cargados del form del home
router.delete('/:id', myPayments.deletePayments); // Eliminar Datos del form de perfil(opción opcional para practicar el delete con mongo).

module.exports = router;