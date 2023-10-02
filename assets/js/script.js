// objects
var questionsArr =[ {
  question: "What is answer to question 1? (A)",
  answers: [
    { text: 'A'}, 
    { text: 'B'}, 
    { text: 'C'}, 
    { text: 'D'}, 
  ],
  correct: "A",
},
{
question: "What is answer to question 2? (A)",
  answers: [
    { text: 'A'}, 
    { text: 'B'}, 
    { text: 'C'}, 
    { text: 'D'}, 
  ],
  correct: "A",
},
{
question: "What is answer to question 3? (A)",
  answers: [
    { text: 'A'}, 
    { text: 'B'}, 
    { text: 'C'}, 
    { text: 'D'}, 
  ],
  correct: "A",
},
{
question: "What is answer to question 4? (A)",
  answers: [
    { text: 'A'}, 
    { text: 'B'}, 
    { text: 'C'}, 
    { text: 'D'}, 
  ],
  correct: "A",
},
{
  question: "What is answer to question 5? (A)",
  answers: [
    { text: 'A'}, 
    { text: 'B'}, 
    { text: 'C'}, 
    { text: 'D'}, 
  ],
  correct: "A",
},
{
question: "What is answer to question 6? (A)",
  answers: [
    { text: 'A'}, 
    { text: 'B'}, 
    { text: 'C'}, 
    { text: 'D'}, 
  ],
  correct: "A",
},

]
//Define global variables (not high scores)/ query selectors
var currentQuestionIndex = 0;
var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-btns");

//functions to start game 


startButton.addEventListener("click", startGame)

function startGame() {
console.log('started')
startButton.classList.add("hide")
questionContainerElement.classList.remove("hide")
countDown();
showQuestion();

}
var timeLeft = 60;
function countDown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft = "1 second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "Game Over";
      clearInterval(timeInterval);
      startButton.classList.remove("hide")
      questionContainerElement.classList.add("hide")
      // location.reload();
   }
 }, 1000);
}

var currentQuestionIndex=0;


function showQuestion() {
  
  if (currentQuestionIndex < questionsArr.length) {
    var currentQuestion = questionsArr[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    for (i = 0; i < currentQuestion.answers.length; i++) {
      var currentAnswer = currentQuestion.answers[i];
      answerButtonsElement.children[i].textContent = currentAnswer.text;
    }

  } else {
    questionElement.textContent = "Quiz Over";
    answerButtonsElement.classList.add('hide'); 
    document.getElementById("final").classList.remove('hide'); 
    
  }

}

answerButtonsElement.addEventListener("click", function (e) {
  console.log('clicked');
  console.log(e.target.innerText);

  if (e.target.innerText === questionsArr[currentQuestionIndex].correct) {
    console.log('correct');
    document.getElementById("correct").innerHTML = 'correct';
  } else {
    console.log('wrong');
    document.getElementById("correct").innerHTML = 'wrong';
    timeLeft -= 15;
  }

  setTimeout(function () {

    document.getElementById("correct").innerHTML = ""
    currentQuestionIndex++;
    showQuestion();
  }, 2000)


});

document.getElementById("initial-btn").onclick = function (e) {
  e.preventDefault();
  var initials = document.getElementById("initials").value;
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", timeLeft);
  
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