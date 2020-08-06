$(document).ready(function () {


    $.get("/api/burgers", function (response) {

        console.log(response);

    });

});