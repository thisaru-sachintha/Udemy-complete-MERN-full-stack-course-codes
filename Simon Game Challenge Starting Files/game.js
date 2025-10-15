const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
var started=false;


$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("level "+level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //selecting the button related to chosen color
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //playing the audio related to color
  playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length===gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }, 200);
    }
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level=0;
    started=false;
}

function playSound(colour) {
    var audio = new Audio("sounds/" + colour + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");

    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}