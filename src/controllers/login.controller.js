const loginService = require('../services/login.service');

const login = async (req, res) => {
  const token = await loginService.login(req.body);
  if (token.type) {
    return res.status(400).json({ message: token.type });
  }
  console.log(token);
  return res.status(200).json({ token });
};

module.exports = { login };