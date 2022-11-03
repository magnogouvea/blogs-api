const { verifyToken } = require('./jwtHelper');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validation = await verifyToken(token);
  if (validation.type === 401) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  tokenValidation,
};