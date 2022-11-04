const express = require('express');
const categoryController = require('../controllers/category.controller');
const categoryValidation = require('../middlewares/validations');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/categories', 
tokenValidation.tokenValidation, 
categoryValidation.categoryValidation,
categoryController.category);

module.exports = router;