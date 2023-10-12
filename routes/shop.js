const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
const productController=require('../controllers/Products')

router.get('/', productController.getProduct);
module.exports = router;
