module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },

    {
      tableName: 'post_category',
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'category',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      }
    );
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'blogPost',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      }
    );
  };

  return PostCategory;
};