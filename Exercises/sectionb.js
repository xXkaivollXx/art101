friends = ["Pim", "Jim", "Slim", "Whim"]// track counts
let hangoutCount = {
    Pim: 0,
    Jim: 0,
    Slim: 0,
    Whim: 0
};

// show image
function showFriendImage(friendName) {
    // hide all images first
    $("img").hide();
    // show only the selected one
    $("body").append("<img class='img' src='" + friendName + "laugh.jpeg'>");
}


// hide all images
$("img").hide();


function FriendClick(friendName) {
    // increase count
    hangoutCount[friendName]++;

    console.log(friendName + " clicked");
    console.log("Hangouts with " + friendName + ": " + hangoutCount[friendName]);

    // check if hit 5 hangouts
    if (hangoutCount[friendName] === 5) {
        let otherFriends = friends.filter(f => f !== friendName);

        let suggestion = otherFriends[0];
        let minCount = hangoutCount[suggestion];

        for (let i = 1; i < otherFriends.length; i++) {
            let f = otherFriends[i];
            if (hangoutCount[f] < minCount) {
                minCount = hangoutCount[f];
                suggestion = f;
            }
        }

        $("#suggestion-box").html(
            "<p>You've hung out with " + friendName + " 5 times. Try hanging out with <b>"
            + suggestion + "</b> (" + minCount + " hangouts).</p>"
        );
    }

    // show image
    showFriendImage(friendName);

    // update count on page
    $("#count-" + friendName).remove();

    $("#" + friendName).append(
        "<p id='count-" + friendName + "'>Hangouts: " + hangoutCount[friendName] + "</p>"
    );
}

// friend clicks
$("#Pim").click(function () {
    console.log("Pim clicked");
    showFriendImage("Pim");
    FriendClick("Pim");
});

$("#Jim").click(function () {
    console.log("Jim clicked");
    showFriendImage("Jim");
    FriendClick("Jim");
});

$("#Slim").click(function () {
    console.log("Slim clicked");
    showFriendImage("Slim");
    FriendClick("Slim");
});

$("#Whim").click(function () {
    console.log("Whim clicked");
    showFriendImage("Whim");
    FriendClick("Whim");
}); 
