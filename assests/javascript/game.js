
var randomResult;
let lost = 0;
let win = 0;
var pervious = 0;

var resetandStartGame = function () {


    // This is finding a random number for the user to guess to 
    randomResult = Math.floor(Math.random() * 69) + 30;
    console.log(randomResult);

    $("#result").html('Random Result: ' + randomResult);

    //these are making the crystals appear on the screen 
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-number": random
        });

        $(".crystals").append(crystal);
    };
}

resetandStartGame(); 



// this is when you click on a crystal, a number appears 
$(".crystal").on('click', function () {

    var num = parseInt($(this).attr('data-number'));

    pervious += num;
    console.log(pervious);

    if (pervious > randomResult) {
        lost--;

        $("#Lost").html(lost);
        console.log("you Lost!")
    }
    else if (pervious === randomResult) {
        win++;

        $("#Win").html(win);

        console.log("You win!");
    };


}); 