module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },

    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {
        through: PostCategory,
        foreignKey: 'categoryId',
        as: 'blogPost'
      }
    );
    models.BlogPost.belongsToMany(models.Category,
      {
        through: PostCategory,
        foreignKey: 'postId',
        as: 'category'
      }
    );
  };

  return PostCategory;
};