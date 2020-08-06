var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var burger = require("./models/burger.js");
var PORT = process.env.PORT || 3000;


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
        var isDevouredArr = []

        var hbsObject = {
            burgers: data,
            burgersDevoured: isDevouredArr
        };


        for (var i = 0; i < data.length; i++) {
            if (data[i].devoured === 1) {
                isDevouredArr.push(data[i].burger_name);
            };
        };


        console.log(hbsObject);

        console.log(isDevouredArr)

        res.render("index", hbsObject);
    });
});

app.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        res.json(data);
    });
})


app.post("/api/newBurg", function (req, res) {

    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json(result);
    });

})

app.put("/api/isDevoured/:id", function (req, res) {
    req.params.id++;

    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

app.listen(PORT, function () {
    console.log("working " + PORT);
});