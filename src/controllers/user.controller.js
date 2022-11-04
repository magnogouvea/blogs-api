const userServices = require('../services/user.service');

const user = async (req, res) => {
  const token = await userServices.userService(req.body);
  if (token.type) {
    return res.status(409).json({ message: token.type });
  }
  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await userServices.getUsers();
  return res.status(200).json(users); 
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const users = await userServices.getUserById(id);
  if (users.type) return res.status(404).json({ message: users.type });
  return res.status(200).json(users);
};

module.exports = { 
  user,
  getUsers,
  getUserById,
};