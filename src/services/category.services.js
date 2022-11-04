const { Category } = require('../models');

const category = async (name) => {
  const newCategorie = Category.create({ name });
  return newCategorie;
};

module.exports = {
  category,
};