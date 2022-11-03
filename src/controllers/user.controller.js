const userServices = require('../services/user.service');

const user = async (req, res) => {
  const token = await userServices.userService(req.body);
  if (token.type) {
    return res.status(409).json({ message: token.type });
  }
  return res.status(201).json({ token });
};
const getUsers = async (req, res) => {
  const users = await userServices.getUsers();
  return res.status(200).json(users); 
};

module.exports = { 
  user,
  getUsers,
};