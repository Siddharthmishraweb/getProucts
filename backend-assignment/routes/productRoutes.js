const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const passport = require('../config/passport');

const authenticateJWT = passport.authenticate('jwt', { session: false });
// Get all products
router.get('/list-products',authenticateJWT, productController.getAllProducts);

module.exports = router;
