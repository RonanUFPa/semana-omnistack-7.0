const express = require ('express');
const routes = new express.Router();

routes.get('/', (req, res) => {
  return res.send('Olá'); //res representa a nossa reposta
});
module.exports = routes