'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoesSchema = Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('shoes', ShoesSchema); 
