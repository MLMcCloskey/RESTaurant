// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var mysql = require("mysql");
var fs = require("fs");
// -----------------------------------------------

// Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// -------------------------------------------------

// Routes
app.get("/", function(request, response){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(requst, response){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(request, response){
    res.sendFile(path.join(__dirname, "reserve.html"));
});





// Open server
app.listen(PORT, function(){
    console.log("Listening on PORT "+ PORT);
});