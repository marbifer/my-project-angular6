const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Routes
app.use('/api/my-practice', require('./routes/my-practice.routes'));
app.use('/api/payments', require('./routes/payments.routes'));
app.use('/api/drop-questions', require('./routes/drop-questions.routes'));
app.use('/api/questions', require('./routes/questions.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
}); 