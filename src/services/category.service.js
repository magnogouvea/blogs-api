const { Category } = require('../models');

const category = async (name) => {
  const newCategorie = Category.create({ name });
  return newCategorie;
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  category,
  getAllCategories,
};