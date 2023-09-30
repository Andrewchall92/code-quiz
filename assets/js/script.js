// objects
var questionsArr =[ {
  question: "What is answer to question 1? (A)",
  answers: [
    { text: 'A', correct: true},
    { text: 'B', correct: false},
    { text: 'C', correct: false},
    { text: 'D', correct: false},
  ]
},
{
question: "What is answer to question 2? (A)",
  answers: [
    { text: 'A', correct: true},
    { text: 'B', correct: false},
    { text: 'C', correct: false},
    { text: 'D', correct: false},
  ]
},
{
question: "What is answer to question 3? (A)",
  answers: [
    { text: 'A', correct: true},
    { text: 'B', correct: false},
    { text: 'C', correct: false},
    { text: 'D', correct: false},
  ]
},
{
question: "What is answer to question 4? (A)",
  answers: [
    { text: 'A', correct: true},
    { text: 'B', correct: false},
    { text: 'C', correct: false},
    { text: 'D', correct: false},
  ]
},
{
  question: "What is answer to question 5? (A)",
  answers: [
    { text: 'A', correct: true},
    { text: 'B', correct: false},
    { text: 'C', correct: false},
    { text: 'D', correct: false},
  ]
},
{
question: "What is answer to question 6? (A)",
  answers: [
    { text: 'A', correct: true},
    { text: 'B', correct: false},
    { text: 'C', correct: false},
    { text: 'D', correct: false},
  ]
},

]
//Define global variables (not high scores)/ query selectors
var answerOptionsIndex = 0;
var currentQuestionIndex = 0;
var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-btns");
var answerButtons = document.querySelectorAll(".btn")

//functions to start game 


startButton.addEventListener("click", startGame)

function startGame() {
console.log('started')
startButton.classList.add("hide")
questionContainerElement.classList.remove("hide")
countDown();
setNextQuestion();

}

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

function setNextQuestion() {
var currentQuestionIndex = 0;
currentQuestionIndex++
answerOptionsIndex++
showQuestion();
}


function showQuestion() {
  var currentQuestion = questionsArr[currentQuestionIndex];
 if (currentQuestion) {
  questionElement.textContent = currentQuestion.question;
 } else {
  questionElement.textContent = "Quiz Over";
 }

 for(i = 0; i < currentQuestion.answers.length; i++){
  var currentAnswer= currentQuestion.answers[i];
  answerButtonsElement.children[i].textContent = currentAnswer.text;
 }
  
}

answerButtons.addEventListener("click", selectAnswer);

function selectAnswer(currentAnswer) {
  if (currentAnswer.correct === true) {
     setNextQuestion();
  } else {
    timeLeft -= 10;
    setNextQuestion();
  }
}












// function selectAnswer() {
//   answerButtons.addEventListener("click", function() {
//     if(currentAnswer.correct == true) {
//       setNextQuestion();
//     } else {
//       timeLeft - 10;
//       setNextQuestion();
//     }
//   })
//   };




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