var userClickedPattern = [];
var buttonColours = ["red", "blue","green", "yellow"];
var gamePattern = [];
var level = 0;
var started = false;
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    if(level >= 0){
        $("#level-title").text("Level " + level); 
     }
    level++; 
    userClickedPattern = [];
}


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});



function playSound(name){
    let audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(){
    if (!started){
        nextSequence();
        started = true;
    }
});


function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        if(userClickedPattern.length === gamePattern.length){
            console.log("Success");
            setTimeout(function(){
                nextSequence();
            }, 1000);
        } 
    } else {
        console.log("Wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
 
    

}

function startOver (){
    level = 0;
    gamePattern = [];
    started = false;
}
  


console.log("user pattern ");
console.log(userClickedPattern);
console.log("game pattern ");
console.log(gamePattern);