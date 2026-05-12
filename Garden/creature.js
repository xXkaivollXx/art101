$("#crAdd").click(function () {

    let crName = $("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();

    let crEyesHTML = " ";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
    }

    console.log(crName);
    console.log(crColor);
    console.log(crEyesNum);
    console.log(crEyesHTML);

    if (crName.length > 1) {
        $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHTML} </div>
                <div class="creature-info">${crName}</div>
            </div>
        `);

    }

    $("#crName").val("");
    // $("#crName").val();

});