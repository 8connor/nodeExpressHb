var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var burger = require("./models/burger.js");
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.engine(
    "hbs",
    exphbs({
        defaultLayout: "main", // Server will read main.handlebars firstß
        extname: "hbs"
    })
);

app.set("view engine", "hbs");


app.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

app.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        res.json(data);
    });
})

app.listen(PORT, function () {
    console.log("working " + PORT);
});