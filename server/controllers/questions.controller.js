const Questions = require('../models/questions');

const questionsCtrl = {};

// Acá se hacen las consultas a la base de datos
questionsCtrl.getQuestions = async (req, res, next) => {
    const dataQuestions = await Questions.find(); // Questions es la colección de la BD
    res.json(dataQuestions);
}

questionsCtrl.searchById = async (req, res) => {
    // Para encontrar un id específico: 
    const dataQuestions = await Questions.findById(req.params.id);
    res.json(dataQuestions);
}

questionsCtrl.postQuestions = async (req, res) => {
    const dataQuestions = new Questions(req.body);
    await dataQuestions.save();
    res.json({
        status: 'Questions saved'
    });
}

questionsCtrl.postQuestionsFilter = async (req, res) => {
    const dataQuestions = await Questions.find(req.body);
    res.json(dataQuestions);
}

questionsCtrl.editQuestions = async (req, res) => {
    const { id } = req.params; // Obtener el id desde req.params
    const dataQuestions = {
        ...req.body
    };
    await Questions.findByIdAndUpdate(id, { $set: dataQuestions }, { new: true }); // $set es para decirle qué datos quiero actualizar
    res.json({ status: 'Questions Updated' });
}

questionsCtrl.deleteQuestions = async (req, res) => {
    await Questions.findByIdAndRemove(req.params.id);
    res.json({ status: 'Questions Deleted' });
};

module.exports = questionsCtrl;
