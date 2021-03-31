// varaible that holds the index of current questions
var currentQuestionIndex = 0;
var count = 75;

// hooks into html 
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var timer;
var correctAnswer = 0;

// hooks into highscores page
var highscoreResults = document.getElementById("highscoreResults");

// function for when you press the start quiz button
function startQuiz() {
    // hook into the id that holds the first box
    var startScreen = document.querySelector("#start-screen");
    // changes the class from start to hide which is declared in css as a display:none property
    startScreen.setAttribute("class", "hide");
    //removes the hide class from the questions div to swap out each question
    questionsElement.removeAttribute("class");
    //function that gets the current question that should be displayed 
    
    getCurrentQuestion();
     
    timer = setInterval(setTime, 1000);
    



}


// function that retrieves the current question 
function getCurrentQuestion() {
    // makes the current question equal to the questions array which is also equal to 0 making it start at the first question
    console.log(questions);
    var currentQuestion = questions[currentQuestionIndex];
    // connects to the question title id in the HTML to push the title from the questions array to it with text content
    var titleElement = document.querySelector("#question-title");
    //prints the title for each questions
    titleElement.textContent = currentQuestion.title;
    console.log(currentQuestion);
    // stops choices from doubling  
    questionChoices.innerHTML = "";
    // for loop for incrementing through the diffrent questions
    for (var i = 0; i < currentQuestion.choice.length; i++) {
        // creates a button for each choice 
        var userChoice = document.createElement("button");
        // sets attribute of the class choice 
        userChoice.setAttribute("class", "choice");
        // giving userChoice value of choice from the questions array 
        userChoice.setAttribute("value", currentQuestion.choice[i]);
        // so that choices are numbered 
        userChoice.textContent = i + 1 + "." + currentQuestion.choice[i];
        // function to get the right or correct answer 
        userChoice.onclick = getAnswer;
        // puts the buttons of choices on the page 
        questionChoices.appendChild(userChoice);
    }
} 



function getAnswer() {
    var answerElement = document.getElementById("showAnswer")

    // if the value of the click was an answer on the array it alerts that you got it correct
    if (this.value === questions[currentQuestionIndex].answer) {
        answerElement.innerHTML = "Correct!"
        correctAnswer = correctAnswer + 1;
        // if a wrong choice was clicked than it alerts you
    } else {
        answerElement.innerHTML = "Wrong!"
        count = count - 10;
    } 
    // increments the var by 1 so the next question appears when the getCurrentQuestion runs it prints the next question
    currentQuestionIndex++; 
    if (currentQuestionIndex === questions.length-0) {
        gameOver();
    } else {
        getCurrentQuestion();
    }
}




function setTime() {
    timerElement.textContent = count;
    if (count <= 0) {
       stopTimer(); 
    } else {
        count--
    }
    
  }

  function stopTimer () {
      clearInterval(timer);

  }


  function gameOver () {
      stopTimer();
      var pointElement = document.getElementById("questionsCorrect")
      var endScreen = document.querySelector('#end-screen');
      var showPointEl = document.getElementById("showPoints");
      endScreen.setAttribute('class', 'choices');
      questionsElement.setAttribute('class', 'hide');
      pointElement.innerHTML = "You got" + " " + correctAnswer + " " + "questions correct!";
      showPointEl.innerHTML = "Your Points! " + (count + 1);

      
  }


var buttonElement = document.getElementById("submit")
buttonElement.addEventListener("click",submitClick);

function submitClick () {
    var initialElement = document.getElementById("initials")
    var initialElement = initialElement.value;
    localStorage.setItem("initials",  JSON.stringify(initialElement +(count + 1)));
    console.log(initialElement);
    localStorage.getItem.appendChild("");
}
// is the click even listener for the quiz to start it's put in the end so all the questions are loaded first 
startBtn.onclick = startQuiz;





