// objects
var question1 = {
  realAnswer: "A",
  fakeAnswer: ["B", "C", "D"]
};

var question2 = {
  realAnswer: "A",
  fakeAnswer: ["B", "C", "D"]
};

var question3 = {
  realAnswer: "A",
  fakeAnswer: ["B", "C", "D"]
};

var question4 = {
  realAnswer: "A",
  fakeAnswer: ["B", "C", "D"]
};

var question5 = {
  realAnswer: "A",
  fakeAnswer: ["B", "C", "D"]
};

var question6 = {
  realAnswer: "A",
  fakeAnswer: ["B", "C", "D"]
};

//Define global variables (not high scores)
var answersArr = [question1, question2, question3, question4, question5, question6]

//functions to start game 
//document.querySelector("button")
//button.eventListener("click", gameStart) ?
//start timer in intervals of 1000ms
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

