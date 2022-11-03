const express = require('express');
const userController = require('../controllers/user.controller');
const validations = require('../middlewares/validations');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/user', validations.userValidation, userController.user);
router.get('/', tokenValidation.tokenValidation, userController.getUsers);

module.exports = router;