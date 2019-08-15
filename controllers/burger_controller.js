var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/",function(req,res){
    burger.all(function(data){
        var burgersObj ={
            burgers : data    
        };
        res.render("index",burgersObj);
    });
});

router.post("/add", function(req,res){
    var newBurger = req.body;
    burger.create("burger_name",newBurger.burger_name,
    function(data){
        res.json({id : data.id});
    })
})

router.put("/update/:id",function(req,res){
    var burgerId = req.params.id;

    burger.update("devoured",req.body.devoured,burgerId,
    function(data){
        res.status(200).end();
    })
})

module.exports = router;