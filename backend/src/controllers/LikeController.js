const Post = require('../models/Post');

module.exports = {
  async store(req, res){
    const post = await Post.findById(req.params.id); // achando por id o post
    
    post.likes += 1; // dando like

    await post.save(); //salvando state

    return res.json(post) // pra gente saber se o post deu tudo fine no insominia
  }
};