'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Cargar archivos de rutas
var shoesRoutes = require('./routers/projects'); 

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.use('/api', shoesRoutes); 

// Se exporta
module.exports = app;
