module.exports = (sequelize, DataTypes) => {
  const blogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    tablename: 'blog_post',
    undescored: true
  });
  blogPostTable.associate = (models) => {
    blogPostTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
  };
  return blogPostTable;
};