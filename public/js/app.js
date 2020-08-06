$(document).ready(function () {


    $.get("/api/burgers", function (response) {

        console.log(response);

    });


    $(document).on("click", "#submitBtn", function () {

        var newBrg = {
            burger_name: $("#input").val(),
            devoured: 0
        }

        $("#theList").append("<li>" + $("#input").val() + "</li>");


        $.post("/api/newBurg", newBrg);

        location.reload();
    });


    $(document).on("click", ".isDevoured", function () {

        var newBrg = {
            devoured: 1
        };

        $.ajax({
            url: "/api/isDevoured/" + $(this).attr("id"),
            type: 'PUT',
            data: newBrg
        });

        location.reload();
    });

});