var currentQuestionIndex = 0;

var time = questions.length * 15;



var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices"); 





function startQuiz () {
    var startScreen = document.querySelector("#start-screen")
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    getCurrentQuestion()


}

function getCurrentQuestion () {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#question-title")
    titleElement.textContent = currentQuestion.title;
    console.log(currentQuestion);
    for(var i = 0; i < currentQuestion.choice.length; i++) {
        var userChoice = document.createElement("button");
        userChoice.setAttribute("class", "choice")
        userChoice.setAttribute("value", currentQuestion.choice[i])
        userChoice.textContent= i + 1 + "." + currentQuestion.choice[i];

        questionChoices.appendChild(userChoice);
    }
}

function getAnswer () {
    userClick = questionChoices
    if (userClick != questions.answer) {
        alert("fuck")
    }
}





startBtn.onclick = startQuiz;


// function setTime() {
//     var timeLeft = 75;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerElement.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerElement.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerElement.textContent = '';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
//   }