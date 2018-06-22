var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var router = require("router");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoute.js")(app);
require("./app/routing/htmlRoutes")(app);



  
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})