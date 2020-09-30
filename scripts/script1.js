var initialsEl = document.getElementById("initials");
var listEl = document.getElementById("list");

function showHighScores() {
    var score = localStorage.getItem("score");
    var initials = localStorage.getItem("initials");
    var newListing = document.createElement("li");
    newListing.textContent = "1. " + initials + ": " + score;
    listEl.appendChild(newListing);
    console.log(list);
    console.log(initals + ": " + score);
}

showHighScores ();