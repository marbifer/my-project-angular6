const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');
const app = express();

/* app.listen(4200, () => {
    console.log('Server on port 4200');
}) */

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

/*app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json()); */

// Routes
app.use('/api/my-practice', require('./routes/my-practice.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
}); 