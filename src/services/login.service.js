const { User } = require('../models');
const jwt = require('../middlewares/jwtHelper');

const login = async (body) => {
  const { email, password } = body;
  const getUser = await User.findOne({
    where: { email, password },
  });
  if (!getUser) {
    return { type: 'Invalid fields' };
  }
  const newToken = jwt.generateToken({ email });
  return newToken;
}; 

module.exports = { login };