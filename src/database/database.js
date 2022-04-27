const mongoose = require('mongoose');

function connectToDatabase() {
  
    mongoose.connect('mongodb://localhost:27017')
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      return console.log(`Erro na conexão: ${err}`);
    });
}

module.exports = connectToDatabase;
