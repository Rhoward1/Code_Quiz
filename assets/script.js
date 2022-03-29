var startButtonEl = document.querySelector("#startButton");
var playAgainEl = document.querySelector("#again");
var clearScoresEl = document.querySelector("#clearScores")
var startContainerEl = document.getElementById("startContainer");
var questionContainerEl = document.getElementById("questionContainer");
var questionsEl = document.getElementsByClassName("questionsDiv")
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var theEndContainerEl = document.getElementById("theEndContainer");
var theScorePageEl = document.getElementById("theScorePage")
var scoreEl = document.getElementById("score");
var formInitialsEl = document.getElementById("initialsForm");
var scoreContainerEl = document.getElementById("scoreContainer")
var viewScoreEl = document.getElementById("viewScores")
var highScoreListEl = document.getElementById("highScoreList")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
var timerEl = document.querySelector("#timer");

var score = 0;
var timeleft;
var gameover
    timerEl.innerText = 0;


var HighScores = [];

 
var questionArray
var QuestionIndex = 0

var questions = [
  { q: 'What company created JavaScript?', 
    a: '3. Netscape', 
    choices: [
    {choice: '1. America Online'},
    {choice: '2. Amazon'},
    {choice: '3. Netscape'},
    {choice: '4. Microsoft'}]
  },
  { q: 'Where in the HTML document do you put the <script> tag?', 
    a: '3. before </body>', 
    choices: [
    {choice: '1. <div>'}, 
    {choice: '2. <Footer>'}, 
    {choice: '3. before </body>'}, 
    {choice: '4. <head>'}]
  },
  { q: 'When was JavaScript created?', 
    a: '1. 1995', 
    choices: [
    {choice: '1. 1995'}, 
    {choice: '2. 1981'}, 
    {choice: '3. 1999'}, 
    {choice: '4. 2004'}]
  },
  { q: 'What is an example of camel notation?', 
    a: '2. camelNotation', 
    choices: [
    {choice: '1. CAMELnotation'}, 
    {choice: '2. camelNotation'}, 
    {choice: '3. CaMeLnOtAtIoN'}, 
    {choice: '4. C@m3L N0t@t!0n'}]
  },
  { q: 'what is css used for', 
    a: '1. To add style to the application', 
    choices: [
    {choice: '1. To add style to the application.'}, 
    {choice: '2. to make java.'}, 
    {choice: '3. To create files.'}, 
    {choice: '4. To make domain names.'}]
  },
];

var showStartPage = function () {
    theScorePageEl.classList.add("hide")
    theScorePageEl.classList.remove("show")
    startContainerEl.classList.remove("hide")
    startContainerEl.classList.add("show")
  scoreEl.removeChild(scoreEl.lastChild)
  
  location.reload();

  QuestionIndex = 0
  gameover = ""
  timerEl.textContent = 0 
  score = 0

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide")
  }
  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
  }
}
 
var setTime = function () {
  timeleft = 40;

var timercheck = setInterval(function() {
  timerEl.innerText = timeleft;
  timeleft--

  if (gameover) {
      clearInterval(timercheck)
  }
 
  if (timeleft < 0) {
      showScore()
      timerEl.innerText = 0
      clearInterval(timercheck)
  }

  }, 1000)
}

var startGame = function() {
  
  startContainerEl.classList.add('hide');
  startContainerEl.classList.remove('show');
  questionContainerEl.classList.remove('hide');
  questionContainerEl.classList.add('show');
  
  questionArray = questions.sort(() => Math.random())
  setTime()
  setQuestion()
}

var setQuestion = function() {
  resetAnswers()
  displayQuestion(questions[QuestionIndex])
}

var resetAnswers = function() {
  while (answerbuttonsEl.firstChild) {
    answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
  };
};

var displayQuestion = function(index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
      var answerbutton = document.createElement('button')
      answerbutton.innerText = index.choices[i].choice
      answerbutton.classList.add('button')
      answerbutton.classList.add('answerButton')
      answerbutton.addEventListener("click", answerCheck)
      answerbuttonsEl.appendChild(answerbutton)
      }
  };

var isCorrect = function() {
  if (correctEl.className = "hide") {
      correctEl.classList.remove("hide")
      correctEl.classList.add("score")
      wrongEl.classList.remove("score")
      wrongEl.classList.add("hide")
      }
  }  

var isWrong = function() {
  if (wrongEl.className = "hide") {
      wrongEl.classList.remove("hide")
      wrongEl.classList.add("score")
      correctEl.classList.remove("score")
      correctEl.classList.add("hide")
  }
}
    
var answerCheck = function(event) {
  var selectedanswer = event.target
      if (questions[QuestionIndex].a === selectedanswer.innerText){
          isCorrect()
          score = score + 5
      }

      else {
        isWrong()
        score = score - 1;
        timeleft = timeleft - 5;
    };
  
    QuestionIndex++
      if  (questionArray.length > QuestionIndex + 1) {
          setQuestion()
      }   
      else {
         gameover = "true";
         showScore();
          }
}

var showScore = function () {
  questionContainerEl.classList.add("hide");
  theEndContainerEl.classList.remove("hide");
  theEndContainerEl.classList.add("show");

  var scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = ("Your final score is " + score + "!");
  scoreEl.appendChild(scoreDisplay);
}       

var createHighScore = function(event) { 
  event.preventDefault() 
  var initials = document.querySelector("#initials").value;
  if (!initials) {
    alert("Please enter your intials to track your score.");
    return;
  }

formInitialsEl.reset();

var HighScore = {
initials: initials,
score: score
} 

HighScores.push(HighScore);
HighScores.sort((a, b) => {return b.score-a.score});

while (highScoreListEl.firstChild) {
 highScoreListEl.removeChild(highScoreListEl.firstChild)
}

for (var i = 0; i < HighScores.length; i++) {
var highscoreEl = document.createElement("li");
highscoreEl.ClassName = "high-score";
highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
highScoreListEl.appendChild(highscoreEl);
}

saveHighScore();
displayHighScores();

}

var saveHighScore = function () {
  localStorage.setItem("HighScores", JSON.stringify(HighScores))
      
}

var loadHighScore = function () {
  var LoadedHighScores = localStorage.getItem("HighScores")
      if (!LoadedHighScores) {
      return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => {return b.score-a.score})


  for (var i = 0; i < LoadedHighScores.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.ClassName = "high-score";
      highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
      highScoreListEl.appendChild(highscoreEl);

      HighScores.push(LoadedHighScores[i]);
      
  }
}  

var displayHighScores = function() {

  theScorePageEl.classList.remove("hide");
  theScorePageEl.classList.add("show");
  gameover = "true"

  if (theEndContainerEl.className = "show") {
    theEndContainerEl.classList.remove("show");
    theEndContainerEl.classList.add("hide");
      }
  if (startContainerEl.className = "show") {
    startContainerEl.classList.remove("show");
    startContainerEl.classList.add("hide");
      }
      
  if (questionContainerEl.className = "show") {
    questionContainerEl.classList.remove("show");
    questionContainerEl.classList.add("hide");
      }

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide");
  }

  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
      }
  
}

var clearScores = function () {
  HighScores = [];

  while (highScoreListEl.firstChild) {
      highScoreListEl.removeChild(highScoreListEl.firstChild);
  }

  localStorage.clear(HighScores);

} 

loadHighScore()
  
// Event Listeners
startButtonEl.addEventListener("click", startGame)
formInitialsEl.addEventListener("submit", createHighScore)
viewScoreEl.addEventListener("click", displayHighScores)
playAgainEl.addEventListener("click", showStartPage)
clearScoresEl.addEventListener("click", clearScores)