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
    $("#give-up").click(function () {

        // Hide everything
        $(".mainzone").hide();
        $(".topzone").hide();
        $("#time-button").hide();

        // Show death screen
        $("body").css({
            "background-image": "url('youdied.jpg')",
            "background-size": "cover",
            "background-position": "center"
        });

        $("#environment-output").html(`
        <div id="death-screen">
            <h1>YOU DIED</h1>
            <button id="retry-button">Try Again</button>
        </div>
    `);

    });

    $(document).on("click", "#retry-button", function () {

        // Show everything again
        $(".mainzone").show();
        $("#time-button").show();

        // Remove death message
        $("#environment-output").html("");

        // Reset background
        $("body").css({
            "background-image": "url('EldenRingEnvironDay.jpeg')"
        });

    });

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

    function chooseTime() {

        let userChoice = prompt(
            "Choose a time:\n1 = Day\n2 = Sunset\n3 = Night"
        );

        if (userChoice == 1) {

            $("body").css(
                "background-image", "url('EldenRingEnvironDay.jpeg')"
            );

            $("#environment-output").html("<h2>It's Daytime!</h2> <p>The area seems peaceful</p>");
        }

        else if (userChoice == 2) {

            $("body").css(
                "background-image", "url('EldenRingEnvironEve.jpeg')"
            );

            $("#environment-output").html("<h2>The sun begins to set...</h2> <p>Begin to prepare yourself</p>");
        }

        else if (userChoice == 3) {

            $("body").css(
                "background-image", "url('EldenRingEnviron.jpeg')"
            );

            $("#environment-output").html("<h2>It's now Night</h2> <p>Do your best to survive</p>");
        }


        else {

            $("#environment-output").html("<h2>Unknown time selected</h2>");
        }
    }

    $("#time-button").click(function () {
        chooseTime();
    });

});