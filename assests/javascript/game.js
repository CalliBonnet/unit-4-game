
<!-- This is where my js cosde will go  -->


    // This is the number that the user must guess 
    var goalNumber = 50;
    var totalScore = 0; 
    var wins = 0; 
    var lose = 0; 

    $("#user-guess-number").text(goalNumber);

    // This is calulating the user's score 
    var count = 0;

    // These are the numbers that each image can have 
    var numberOptions = [7, 10, 4, 20]; 


    // This is gettnig the images on the screen 4 times 
    for (var i = 0; i < numberOptions.length; i++) {
        var imageOfStan = $("<img>"); 
        imageOfStan.addClass("image-Stan"); 
        imageOfStan.attr("src", "./assests/images/Stan-In-The-Wind.jpg"); 
        imageOfStan.attr("data-stanvalue", numberOptions[i]); 
        $("#Stanley-Images").append(imageOfStan); 
    }


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


        document.getElementsByClassName("user-socre").textConent = totalScore; 
        document.getElementsByClassName("user-wins").textConent = wins; 
        document.getElementsByClassName("user-lose").textConent = lose; 
    });



