const categoryService = require('../services/category.service');

const category = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.category(name);
  return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoryService.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = {
  category,
  getAllCategories,
};