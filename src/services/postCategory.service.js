const { BlogPost, User, PostCategory, Category } = require('../models');
const { verifyToken } = require('../middlewares/jwtHelper');

const verifyId = async (id) => {
  const allCategories = await Category.findAll();
  if (!id.every((catId) => allCategories.some((categories) => catId === categories.id))) {
    const error = new Error('one or more "categoryIds" not found');
    error.status = 400;
    throw error;
  }
};

const InsertNewPost = async ({ title, content, categoryIds }, token) => {
  await verifyId(categoryIds);
  const verToken = await verifyToken(token);

  const user = await User.findOne({
    attributes: ['id'],
    where: { email: verToken.email },
  });

  const userId = user.dataValues.id;
  const newPost = await BlogPost.create({ title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });
  await PostCategory.bulkCreate(categoryIds.map((id) => ({
    postId: newPost.dataValues.id,
    categoryId: id,
  })));
  return newPost;
};

module.exports = {
  InsertNewPost,
};