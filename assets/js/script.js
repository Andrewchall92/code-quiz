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
];

var currentQuestionIndex = 0;
var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-btns");

startButton.addEventListener("click", startGame)

function startGame() {
console.log('started')
startButton.classList.add("hide")
questionContainerElement.classList.remove("hide")
document.getElementById("hs-div").classList.add("hide");
countDown();
showQuestion();

};

var timeLeft = 60;
function countDown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1 && currentQuestionIndex < questionsArr.length) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1 && currentQuestionIndex === questionsArr.length) {
      timerEl.textContent = timeLeft = "1 second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "Game Over";
      questionElement.classList.add('hide');
      clearInterval(timeInterval);
      endGame();   
   }
 }, 1000);
};

var currentQuestionIndex=0;

function showQuestion() {
  
  if (currentQuestionIndex < questionsArr.length) {
    var currentQuestion = questionsArr[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (i = 0; i < currentQuestion.answers.length; i++) {
      var currentAnswer = currentQuestion.answers[i];
      answerButtonsElement.children[i].textContent = currentAnswer.text;
      
    };
   } else {
    endGame();
  };
};

function endGame(){
  questionElement.textContent = "";
    answerButtonsElement.classList.add('hide'); 
    document.getElementById("final").classList.remove('hide'); 
    document.getElementById('score').innerHTML = timeLeft;
    timerEl.classList.add('hide');
};

answerButtonsElement.addEventListener("click", function (e) {
  console.log('clicked');
  console.log(e.target.innerText);
  if (e.target.innerText === questionsArr[currentQuestionIndex].correct) {
    console.log('correct');
    document.getElementById("correct").innerHTML = 'correct';
  } else {
    console.log('wrong');
    document.getElementById("correct").innerHTML = 'wrong';
    if (timeLeft >= 15) {
      timeLeft -= 15;
    } else {
      timeLeft = 0;
    }
  };

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
};

document.getElementById("hs-btn").onclick = function() {
  document.getElementById("hs-div").classList.remove('hide');
  var initials = localStorage.getItem("initials");
  var score = localStorage.getItem("score");
  console.log(initials, score);
  document.getElementById("myinitial").innerHTML = initials;
  document.getElementById("myscore").innerHTML = score;
};

document.getElementById("initial-btn").addEventListener("click", function() {
  location.reload();
});
