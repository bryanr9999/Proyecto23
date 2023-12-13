'use strict'

var mongoose = require("mongoose");
var app = require("./app");
var port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Shoes')
    .then(()=> {
        console.log("se conectó a mongodb ");
        //se crea el server
        app.listen(port, ()=>{
            console.log("conexion a la base de datos exitosa");
        })
    })
    .catch(err => console.log(err))