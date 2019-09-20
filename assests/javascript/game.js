
var randomResult;
let lost = 0;
let win = 0;
var pervious = 0;

var resetAndStartGame = function () {
    $(".crystals").empty(); 

    // This is finding a random number for the user to guess to 
    randomResult = Math.floor(Math.random() * 19) + 101;
    console.log(randomResult);

    //this is populating the ramdon number that the user must guess to on the screen 
    $("#result").html('Random Result: ' + randomResult);


    //these are making the crystals appear on the screen 
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 12) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-number": random
        });

        $(".crystals").append(crystal);
    };
    $("#pervious").html(pervious); 
    
}

resetAndStartGame(); 




// this is when you click on a crystal, a number appears 


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-number'));

    $("#pervious").html(pervious); 

    pervious += num;
    console.log(pervious);

    if (pervious > randomResult) {
        lost++;

        $("#Lost").html("Your total number of loses: " + lost);
        pervious = 0; 

        resetAndStartGame(); 

    }
    else if (pervious === randomResult) {
        win++;

        $("#Win").html("Your total of wins: " + win);
        pervious = 0; 
        
        resetAndStartGame(); 
    };


}); 