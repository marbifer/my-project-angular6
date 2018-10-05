const express = require('express');
const router = express.Router();

const myPayments = require('../controllers/payments.controller');

router.get('/', myPayments.getPayments); // Tabla de pagos del home
router.post('/', myPayments.postPayments); // Mandar datos Tabla de pagos del home
router.post('/find', myPayments.postPaymentsFilter); // Filtra un dato en particular de Tabla de pagos del home

module.exports = router;