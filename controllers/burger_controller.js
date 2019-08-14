var express = require("express");
var burger = require("../models/burger");

var app = express.Router();

app.get("/all",function(req,res){
    burger.all(function(data){
        var burgersObj ={
            cats :data    
        };
        res.render("index",burgersObj);
    });
});

app.post("/add", function(req,res){
    var newBurger = req.body;
    burger.create("burger_name","devoured",newBurger.name,newBurger.devoured,
    function(data){
        res.redirect("/all");
    })
})

app.put("/update/:id",function(req,res){
    var burgerId = req.params.id;

    burger.update("burger_name","devoured",req.body.name,req.body.devoured,burgerId,
    function(data){
        res.status(200).end();
    })
})

module.exports = app;