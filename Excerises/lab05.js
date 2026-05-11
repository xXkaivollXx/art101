function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("That's Right!!");
    }
    else {
        $("#output").html("Try Again :(");
    }
}

$("#good-button").click(function () {
    askNumber(3);
});
