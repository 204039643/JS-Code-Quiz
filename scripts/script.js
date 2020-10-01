//DOM variables
var startButton = document.getElementById("start-button");
var startSectionEl = document.getElementById("startSection");
var questionsEl = document.getElementById("questions");
var titleEl = document.getElementById("title");
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("end-screen");
var submitEl = document.getElementById("submit");
var timerEl = document.getElementById("time");
var feedbackEl = document.getElementById("feedback");
var answerEl = document.getElementById("answerDiv");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var HSrowEl = document.getElementById("HSrow");

//JS variables
var time = 100;
var timerId;
var listing;
var questionId = 0;

//array of objects for question including title (question), 4 choices for answer, and correct answer key
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

//function definitions

//start the countdown timer when user clicks 'start' button
function startTimer() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

//start quiz loop by hiding start section element and showing questions element
function startQuiz() {
    console.log("Quiz has started!");
    startSectionEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerId = setInterval(startTimer, 1000);
    timerEl.textContent = time;
    newQuestion();
}

//end quiz by hiding questions element and showing end screen element, capture time left as score and set to local storage
function endQuiz() {
    clearInterval(timerId);
    timerEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
    endScreenEl.removeAttribute("class");
    finalScoreEl.textContent = time + " seconds";
    var score = time;
    localStorage.setItem("score", score);
}

//collect user input for initials and set to local storage
function addHighScore() {
    var initials = initialsEl.value;
    if (initials === "") {
        alert("Please enter a value");
    } else if (initials.length > 3) {
        alert("Please use 3 characters or less");
        return;
    }
    localStorage.setItem("initials", initials);
    window.location.href = "./highscores.html";
}


//Create a new question with 4 multiple choice answers
function newQuestion() {

    var currentQuestion = questions[questionId];
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    //Create 4 answer buttons for the current question    
    currentQuestion.choices.forEach((choice, i) => {

        var button = document.createElement("button");
        button.setAttribute("class", "choice");
        button.setAttribute("value", choice);
        button.textContent = i + 1 + ". " + choice;
        button.onclick = aButtonClick;
        choicesEl.appendChild(button);

    })
}

//perform following logic for whenever an answer button is clicked; penalize user 15 seconds for a wrong answer
function aButtonClick() {
    // check if user guessed wrong
    if (this.value !== questions[questionId].answer) {
        // penalize time
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        // display new time on page
        timerEl.textContent = time;
        // define feedback to user if selected answer is correct or wrong
        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    }

    // flash right/wrong feedback on page
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move to next question
    questionId++;

    // check if we've run out of questions
    if (questionId === questions.length) {
        endQuiz();
    } else {
        newQuestion();
    }

}

//event listeners
startButton.addEventListener("click", startQuiz);
submitEl.addEventListener("click", addHighScore);
