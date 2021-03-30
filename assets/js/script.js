// varaible that holds the index of current questions
var currentQuestionIndex = 0;
// time length 
// var time = questions.length * 15;
var count =75;
var counter = setInterval(time, 1000);
// hooks into html 
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");




// function for when you press the start quiz button
function startQuiz() {
    // hook into the id that holds the first box
    var startScreen = document.querySelector("#start-screen");
    // changes the class from start to hide which is declared in css as a display:none property
    startScreen.setAttribute("class", "hide");
    //removes the hide class from the questions div to swap out each question
    questionsElement.removeAttribute("class");
    //function that gets the current question that should be displayed 
    setTime();
    getCurrentQuestion();
    



}


// function for cycling through the current questions that are diffrent 
function getCurrentQuestion() {
    // makes the current question equal to the questions array which is also equal to 0 making it start at the first question 
    var currentQuestion = questions[currentQuestionIndex];
    // connects to the question title id in the HTML to push the title from the questions array to it with text content
    var titleElement = document.querySelector("#question-title");
    //prints the title for each questions
    titleElement.textContent = currentQuestion.title;
    console.log(currentQuestion);
    // stops choices from doubling  
    questionChoices.innerHTML = "";
    // for loop for cycling through the diffrent questions
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
    console.log(this);
    // if the value of the click was an answer on the array it alerts that you got it correct
    if (this.value === questions[currentQuestionIndex].answer) {
        alert("Correct!");
        // if a wrong choice was clicked than it alerts you
    } else {
        alert("Wrong!");
    }
    // increments the var by 1 so the next question appears when the getCurrentQuestion runs it prints the next question
    currentQuestionIndex++;
    getCurrentQuestion();
}




function setTime() {
    count = count - 1;
    if(count <= 0) {
        clearInterval(counter);
    }
  }



  function gameOver () {
      var endScreen = document.querySelector('#end-screen');
      endScreen.setAttribute('class', 'choice');
  }
gameOver();






// is the click even listener for the quiz to start it's put in the end so all the questions are loaded first 
startBtn.onclick = startQuiz;

