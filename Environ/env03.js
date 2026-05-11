let environmentTitle = "The Lands Between";

let environmentElements = ["space", "ruins", "rubble", "enemies"];

let mainEntity = {
    name: "The Old World",
    type: "soft border",
    mood: "suspicious",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$(document).ready(function () {

    // Show the images
    $("#choose-calling").click(function () {
        $(".topzone").fadeIn(1000);
    });

    // Clickable class choices
    $("#prophet").click(function () {
        $("#environment-output").html("<h2>You chose Prophet!</h2>");
    });

    $("#prisoner").click(function () {
        $("#environment-output").html("<h2>You chose Prisoner!</h2>");
    });

    $("#vagabond").click(function () {
        $("#environment-output").html("<h2>You chose Vagabond!</h2>");
    });

});

$("#choose-calling").click(function () {

    $(".topzone").css("display", "flex").hide().fadeIn(1000);

});