const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mernstack'

mongoose.connect(URI)
    .then(db => console.log('La base de datos está conectada'))
    .catch(error => console.error(err));

module.exports =  mongoose;