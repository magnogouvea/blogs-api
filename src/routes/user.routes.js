const express = require('express');
const userController = require('../controllers/user.controller');
const validations = require('../middlewares/validations');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/user', validations.userValidation, userController.user);
router.get('/user', tokenValidation.tokenValidation, userController.getUsers);
router.get('/user/:id', tokenValidation.tokenValidation, userController.getUserById);

module.exports = router;