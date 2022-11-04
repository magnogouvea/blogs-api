const categoryService = require('../services/category.services');

const category = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.category(name);
  return res.status(201).json(newCategory);
};

module.exports = {
  category,
};