const postServices = require('../services/postCategory.service');

const postCategory = async (req, res) => {
  const token = req.header('Authorization');
  const newPost = await postServices.InsertNewPost(req.body, token);
  return res.status(201).json(newPost);
};

module.exports = {
  postCategory,
};