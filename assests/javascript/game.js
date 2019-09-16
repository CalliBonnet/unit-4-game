
var randomResult;
let lost;
let win;


randomResult = Math.floor(Math.random() * 99 - 30); 

$("#result").html('Random Result: '); 

//these are the crystals 
for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-number": random,
    });

    $(".crystals").append(crystal);
}; 