const express = require('express');

const postValidations = require('../middlewares/validations');
const postController = require('../controllers/postCategory.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/post', 
tokenValidation.tokenValidation, 
postValidations.postValidations, 
postController.postCategory);

module.exports = router;