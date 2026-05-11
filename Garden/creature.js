$("#crAdd").click(function () {

    let crName = $("#crName").val();
    console.log(crName);

    if (crName.length > 0) {
        $("#creature-list").append("<div>" + crName + "</div>");

    }

    $("#crName").val("");
    // $("#crName").val();

});