//inicializando o servidor com express
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://ronan:<4everayzer>@cluster0-hqoqg.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
})// conectando bd cluster


app.get('/', (req, res) => {
  return res.send('hello world, 2019 aaaa'); //res representa a nossa reposta
});

app.listen(3333); //ouvindo na porta 3333
