module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
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
  });
  return UserTable;
};

