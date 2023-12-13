'use strict';

var express = require('express');
var controller = require('../controllers/projects'); 
var router = express.Router();

router.get('/home', controller.home);
router.post('/test', controller.test);
router.post('/saveshoes', controller.saveShoes); 
router.get('/shoes/:_id?', controller.getShoes);

module.exports = router;
