const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

const {mongoose} = require('./database');
// Settings
app.set('port', process.env.PORT || 3000)


// Midlewares
app.use(morgan('dev'));
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, "public")));
 
// Routes

app.use( '/api/task', require ('./routes/task.routes'));

// Starting the server
app.listen(app.get('port'),  () => {
    console.log('Aplicación iniciada en el puerto ${app.get("port")} ');
});


