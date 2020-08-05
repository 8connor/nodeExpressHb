var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars")
var app = express();
var PORT = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set("view engine", "handlebars");

// Handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main" // Server will read main.handlebars firstß
    })
);

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(PORT, function () {
    console.log("working " + PORT);
});