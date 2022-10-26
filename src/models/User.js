module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('Users', {
    display_name: DataTypes.STRING,
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

