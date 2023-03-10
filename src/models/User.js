module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tablename: 'users',
    underscored: true,
    timestamps: false
  });
  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogPost' });
  }
  return UserTable;
};

