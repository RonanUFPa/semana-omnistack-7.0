//inicializando o servidor com express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send('hello world, 2019 aaaaa'); //res representa a nossa reposta
});

app.listen(3333); //ouvindo na porta 3333
