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

// Empty array to store patrons
var patrons = [
    {
        name: "Yung Gravy",
        phone: "4044206969",
        email: "momDater@yourMomsHouse.gov"
    },
];

var seated = [];
var waiting = [];
var moms = ["Charlene", "Big Mama (Martin Lawrence)", "Elizabeth", "Justine", "Andrea"]

// ----------------------------------------------------
// Routes
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(requst, response){
    response.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(request, response){
    response.sendFile(path.join(__dirname, "reserve.html"));
});

// Display patrons

app.get("/api/patrons", function(request, response){
    return response.json(patrons);
});

app.get("/api/patrons/:patron", function(request, response){
    var chosen = request.params.patron;

    console.log(chosen);

    for (i = 0; i < patrons.length; i++){
        if (chosen === patrons[i].routeName){
            return response.json(patrons[i]);
        }
    }
    return response.json(false)
});

// Add patrons
app.post("/api/patrons", function(request, response){
    var newPatron = request.body;
    newPatron.routeName = newPatron.name.replace(/\s+/g, "").toLowerCase();
    console.log(newPatron);
    patrons.push(newPatron);
    response.json(newPatron);
})


// Open server
app.listen(PORT, function(){
    console.log("Listening on PORT "+ PORT);
});