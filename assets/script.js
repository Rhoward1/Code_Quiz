//
var startButtonEl = document.querySelector("#startButton");
var playAgainEl = document.querySelector("#again");
var clearScores = document.querySelector("#clearScores")
var startContainerEl = document.getElementById("startContainer");
var questionContainerEl = document.getElementById("questionContainer");
var theEndContaierEl = document.getElementById("theEndContainer");
var scoreEl = document.getElementById("score");
var formNameEl = document.getElementById("nameForm");

var timerEl = document.querySelector("#timer");
var form
























var startGame = function() {
    startContainerEl.classList.add("hide");
    startContainerEl.classList.remove("show");
    questionContainerEl.classList.remove("hide");
    questionContainerEl.classList.add("show");

    
}
























startButtonEl.addEventListener("click", startButton)