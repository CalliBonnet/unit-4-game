
$(document).ready(function(){

let goalNumber = Math.floor(Math.random() * 101 + 21); 


$("#user-guess-number").text(goalNumber); 

let btn1 = Math.floor(Math.random() * 11 + 1); 


var totalScore = 0;
var wins = 0;
var lose = 0;
var displayWins = $("user-wins"); 
var displayLoses = $("user-lose"); 
var displayUserScore = $("user-socre"); 

userWinScore.text(wins); 
displayLoses.text(lose); 
displayUserScore.text(totalScore); 





$("#user-guess-number").text(goalNumber);

// This is calulating the user's score 
var count = 0;

// These are the numbers that each image can have 
var numberOptions = [7, 10, 4, 20];



//this is the code that counts the values and determines when you win/lose (do this 4 times)
$(".image-Stan").on("click", function () {

    var stanValue = ($(this).attr("data-stanvalue"));
    stanValue = parseInt(stanValue);
    count += stanValue;

    alert("Your new score is: " + count)

    //This is the function that will create the Win and Lose Alerts if the user's score matches the guess number 
    if (count === goalNumber) {

        alert("You are Winner!");

    }
    else if (count >= goalNumber) {

        alert("You lose! So Sad!");
    };

});

}); 
