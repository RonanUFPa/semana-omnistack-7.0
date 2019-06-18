//inicializando o servidor com express
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('')

app.get('/', (req, res) => {
  return res.send('hello world, 2019 aaaa'); //res representa a nossa reposta
});

app.listen(3333); //ouvindo na porta 3333
