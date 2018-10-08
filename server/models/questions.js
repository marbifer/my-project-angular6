const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionsSchema = new Schema({
    questions: [{
        categories: String,
        question: String,
        answer: String
    }],
    catRelationship: String
});

module.exports = mongoose.model('Questions', QuestionsSchema);