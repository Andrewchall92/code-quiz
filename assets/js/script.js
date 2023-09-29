// objects
var question1 = {
  correct: "A",
  false: ["B", "C", "D"]
};

var question2 = {
  correct: "A",
  false: ["B", "C", "D"]
};

var question3 = {
  correct: "A",
  false: ["B", "C", "D"]
};

var question4 = {
  correct: "A",
  false: ["B", "C", "D"]
};

var question5 = {
  correct: "A",
  false: ["B", "C", "D"]
};

var question6 = {
  correct: "A",
  false: ["B", "C", "D"]
};
//Define global variables (not high scores)/ query selectors
const answersArr = [question1, question2, question3, question4, question5, question6]
var currentQuestionIndex = 0
var timerEl = document.getElementById("countdown");
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container")
const currentQuestion = document.getElementById("question")
//functions to start game 
startButton.addEventListener("click", startGame)

function startGame() {
console.log('started')
startButton.classList.add("hide")
questionContainerElement.classList.remove("hide")
setNextQuestion();
countDown();
}


function setNextQuestion() {
showQuestion()
  
}

function showQuestion() {
currentQuestion
}


function selectAnswer() {

}

function checkAnswer() {

}


//timer count down
function countDown() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft = " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "out of time";
      clearInterval(timeInterval);
   }
 }, 1000);
}







//button.eventListener("click", gameStart) ?


//display timer count down on screen
//display first question and corresponding answers(array of objects for questions/objects have attributes of answer and fake answers)(keep track of array and display next index up)
//event listener on buttons check answers
  //compare what user clicked with what we have stored as the right answer
  //if wrong its going to display wrong and subtract time from timer (only requirement is subtract time)
  //if correct display correct (not full requirement)
  //in either case move onto next question
  //questions repeat until timer runs out or questions run out, their time remaining is the final score(for loop) (make 6-10 questions)
       //when our array of questions returns undefined or length-1 for index
       //if end of questions end game, stop timer when last question is finished(at end game function)
//prompt for initals first and then save their score
//clear timer
//functions gets called when game ends(possible called by next function?)

// for (i=0; i<answersArr.length; i++ ) {

// }