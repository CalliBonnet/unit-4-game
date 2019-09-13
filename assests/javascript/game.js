
$(document).ready(function () {

    //++++++++++++++++++++++++++This is creating the random number ++++++++++++++++++++++++++

    $("#user-guess-number").text(goalNumber);
    let goalNumber = Math.floor(Math.random() * 101 + 21);

    //++++++++++++++++++++++++++Defining all Varables ++++++++++++++++++++++++++
    var totalScore = 0;
    var wins = 0;
    var lose = 0;
    var displayWins = $("user-wins");
    var displayLoses = $("user-lose");
    var displayUserScore = $("user-socre");
    var button1 = $("btn1");
    var button2 = $("btn2");
    var button3 = $("btn3");
    var button4 = $("btn4");


    //++++++++++++++++++++++++++ Createing random values for each button/image++++++++++++++++++++++++++
    button1 = Math.floor(Math.random() * 11 + 1);
    button2 = Math.floor(Math.random() * 11 + 1);
    button3 = Math.floor(Math.random() * 11 + 1);
    button4 = Math.floor(Math.random() * 11 + 1);


    displayWins.text(wins);
    displayLoses.text(lose);
    displayUserScore.text(totalScore);



    $("#user-guess-number").text(goalNumber);


    //this is the code that counts the values and determines when you win/lose (do this 4 times)
    $(".btn1").on("click", function () {

        var stanValue = ($(this).attr("data-stanvalue"));
        stanValue = parseInt(stanValue);
        totalScore += stanValue;

        alert("Your new score is: " + totalScore)

        //This is the function that will create the Win and Lose Alerts if the user's score matches the guess number 
        if (totalScore === goalNumber) {

            alert("You are Winner!");

        }
        else if (totalScore >= goalNumber) {

            alert("You lose! So Sad!");
        };
    });

    $(".btn2").on("click", function () {

        var stanValue = ($(this).attr("data-stanvalue"));
        stanValue = parseInt(stanValue);
        totalScore += stanValue;

        alert("Your new score is: " + totalScore)

        //This is the function that will create the Win and Lose Alerts if the user's score matches the guess number 
        if (totalScore === goalNumber) {

            alert("You are Winner!");

        }
        else if (totalScore >= goalNumber) {

            alert("You lose! So Sad!");
        };
    });

    $(".btn3").on("click", function () {

        var stanValue = ($(this).attr("data-stanvalue"));
        stanValue = parseInt(stanValue);
        totalScore += stanValue;

        alert("Your new score is: " + totalScore)

        //This is the function that will create the Win and Lose Alerts if the user's score matches the guess number 
        if (totalScore === goalNumber) {

            alert("You are Winner!");

        }
        else if (totalScore >= goalNumber) {

            alert("You lose! So Sad!");
        };
    });

    $(".btn4").on("click", function () {

        var stanValue = ($(this).attr("data-stanvalue"));
        stanValue = parseInt(stanValue);
        totalScore += stanValue;

        alert("Your new score is: " + totalScore)

        //This is the function that will create the Win and Lose Alerts if the user's score matches the guess number 
        if (totalScore === goalNumber) {

            alert("You are Winner!");

        }
        else if (totalScore >= goalNumber) {

            alert("You lose! So Sad!");
        };

    });

}); 
