const express = require('express');
const router = express.Router();

const myQuestions = require('../controllers/questions.controller');

router.get('/', myQuestions.getQuestions); // Tabla de de preguntas de la sección Pregúntas frecuentes
// router.get('/:id', myQuestions.searchById); // Traer por Id en la BD
router.post('/', myQuestions.postQuestions); // Mandar datos Tabla de preguntas de la sección Pregúntas frecuentes
router.post('/find', myQuestions.postQuestionsFilter); // Filtra un dato en particular de Tabla de preguntas de la sección Pregúntas frecuentes
router.put('/:id', myQuestions.editQuestions); // Actualizar o editar Datos pre cargados de la tabla de preguntas de la sección Pregúntas frecuentes
router.delete('/:id', myQuestions.deleteQuestions); // Eliminar Datos de la tabla de preguntas de la sección Pregúntas frecuentes

module.exports = router;