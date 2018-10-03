const mongoose = require('mongoose');
const URI = 'mongodb://localhost/my-practice-db'; // Nombre de la Base de datos

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;