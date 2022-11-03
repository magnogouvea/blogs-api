module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },

    {
      tableName: 'PostCategory',
      underscored: true,
      timestamps: false
    }
  );

  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {
        through: postCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'blogPost'
      }
    );
    models.BlogPost.belongsToMany(models.Category,
      {
        through: postCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories'
      }
    );
  };

  return postCategory;
};