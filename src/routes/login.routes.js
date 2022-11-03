const express = require('express');
const loginController = require('../controllers/login.controller');
const validations = require('../middlewares/validations');

const router = express.Router();

router.post('/login', validations.loginValidation, loginController.login);

module.exports = router;