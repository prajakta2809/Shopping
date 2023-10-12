const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const productController=require('../controllers/Products')

router.get('/add-product', productController.getAddProduct);
 

router.post('/add-product', productController.postAddProduct);
exports.routes = router;
