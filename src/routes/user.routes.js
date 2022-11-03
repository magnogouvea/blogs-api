const express = require('express');
const userController = require('../controllers/user.controller');
const validations = require('../middlewares/validations');

const router = express.Router();

router.post('/user', validations.userValidation, userController.user);

module.exports = router;