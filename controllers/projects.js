'use strict';
var Shoes = require('../models/projects'); 

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: "soy tu papa home :v"
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: "soy tu papa test"
        });
    },
    //agregar un proyecto
    saveShoes: function (req, res) { 
        var shoes = new Shoes(); 
        var params = req.body;

        shoes.name = params.name;
        shoes.description = params.description;
        shoes.developer = params.developer;

        shoes.save((err, shoesStored) => {
            if (err) return res.status(500).send({ message: "error al guardar el documento" });
            if (!shoesStored) return res.status(404).send({ message: "no se pudo guardar el documento" });
            return res.status(200).send({ shoes: shoesStored });
        });
    },
    getShoes: function (req, res) { 
        var shoesId = req.params._id;
        if (shoesId == null) return res.status(404).send({ message: "no se pudo encontrar el documento" });

        Shoes.findById(shoesId, (err, shoes) => { 
            if (err) return res.status(500).send({ message: "error al retornar los datos" });
            if (!shoes) return res.status(404).send({ message: "no se pudo encontrar el documento" });
            return res.status(200).send({ shoes });
        });
    }
};

module.exports = controller;
