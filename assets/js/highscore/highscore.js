var highScores = document.getElementById("highscoreResults");
var scores = JSON.parse(localStorage.getItem(".setHighscores"));

for (let index = 0; index < scores.length; index++) {
    // make a element for the scores and the initials
    var scoreElement = document.createElement("span")
    var initialElement = document.createElement("span")
    var breakElement = document.createElement("br")
    // give the elements the content from the database
    scoreElement.textContent = scores[index].finalscore
    initialElement.textContent = scores[index].initials
    // put them on the page
    highScores.append(initialElement ,  " ",  scoreElement, "    ", breakElement);
    
    
}
    

var backButtonElement = document.getElementById("backBtn");
backButtonElement.addEventListener("click",backToQuiz);

function backToQuiz () {
    var homeUrl = "./index.html"
    window.location = homeUrl
}

var clearButton = document.getElementById("clearHs");
clearButton.addEventListener("click", clearHighscore);

function clearHighscore () {
   
    initialElement.remove("span")
    scoreElement.remove("span")
}