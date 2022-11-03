const { User } = require('../models');
const jwt = require('../middlewares/jwtHelper');

const userService = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    return { type: 'User already registered' };
  }
  const newUser = await User.create({ displayName, email, password, image });
  const newToken = jwt.generateToken({ email: newUser.email });
  return newToken;
};

const getUsers = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return users;
};

module.exports = { 
  userService, 
  getUsers,
};