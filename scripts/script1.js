//DOM variables
var initialsEl = document.getElementById("initials");
var listEl = document.getElementById("list");
var backButton = document.getElementById("back-button");
var clearButton = document.getElementById("clear-button");

//JS variables

//Functions
// retrieve high scores from local storage and build a new OL to display below header
function showHighScores() {
    var score = localStorage.getItem("score");
    var initials = localStorage.getItem("initials");
    var newListing = document.createElement("li");
    newListing.textContent = initials + "- " + score;
    listEl.appendChild(newListing);
    console.log(newListing);
    return newListing;
}

//navigate back to main page
function goBack() {
    window.location.href = "./index.html";
}

//clear local storage and remove high score list element
function clearStorage() {
    localStorage.clear();
    var newListing = document.createElement("li");
    newListing.textContent = "";
    listEl.parentNode.removeChild(listEl);
}

//function call
showHighScores();

//event listeners
backButton.addEventListener("click", goBack);
clearButton.addEventListener("click", clearStorage);