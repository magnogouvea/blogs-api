module.exports = (sequelize, DataTypes) => {
  const categoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    tablename: 'category',
    underscored: true,
    timestamps: false
  });
  return categoryTable;
};