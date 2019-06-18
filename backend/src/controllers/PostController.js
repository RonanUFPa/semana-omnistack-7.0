const Post = require('../models/Post');

module.exports = {
  async index(req, res){
  
  },
  async store(req, res){
    console.log(req.file); //verifica o envio da imagem com o .file e .body, do corpo da mensagem
    return res.json({ ok: true }); // pra gente saber se o post deu tudo fine no insominia
  }
  
};