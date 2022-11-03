require('dotenv/config');

const jwt = require('jsonwebtoken');

const secretToken = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, secretToken, jwtConfig);

module.exports = { generateToken };