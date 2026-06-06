// declaring variables 

let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter=0;
let mood="neutral";

// reusable functions

function makeImage( colorToMatch ) { 
    // what the function actually does
    if ( colors[colorCount]== colorToMatch ) {
        $("body").append("<img width=100 src='"+colorToMatch+".jpeg'>");
    }
}

function paintPage() {
    $("body").css("background-color",)
}

// what happens when the button is clicked

$("#needy-button").click(function () { 
 
count = count + 1;
colorCount=count-1;

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);
   
   if (colorCount==4) { 
        colorCount=0;  
        console.log("It Happened");
    }

   if (colors[colorCount] == "Hot Pink") { 
        $("#needy-button").after("Not Pink ");
    }
    else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after("Hey Orchid ");
    }
    else {
      $("#needy-button").after("All Other Colors ");
    }

    if (count < 5) { mood="Fresh and Happy"; }
    else if ( count >= 5 && count < 10) {mood="Keep Pushing";}
    else { mood="So Tired";}

    makeImage("Orchid");
    makeImage("Plum")
    makeImage("Coral")

    console.log(mood);

});
