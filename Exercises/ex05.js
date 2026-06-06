let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCount=0;
let mood="neutral";

$("#needy-button").click(function () { 
 
count = count + 1;

if (colorCount >= colors.length - 1) {
    colorCount = 0
};

colorCount = colorCount + 1

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);

   if (colors[colorCount] == "HotPink") { 
        $("#needy-button").after("Not Pink ");
    }
    else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after("Hey Orchid ");
    }
    else {
      $("#needy-button").after("All Other Colors ");
    }

    if (count < 5) { mood="Fresh & Happy"; }

    else if ( count >= 5 && count < 10) {mood="Keep Pushing";}
   
    else { mood="So Tired";}

    console.log(mood);

});