//inicializando o servidor com express
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://ronan:4everayzer@cluster0-hqoqg.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
});// conectando bd cluster4

app.use(require('./routes')); // linkando as rotas

app.listen(3333); //ouvindo na porta 3333
