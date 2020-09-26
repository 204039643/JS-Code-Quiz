//DOM variables
var startButton = document.querySelector("#start-button")
var containerEl = document.querySelector("#container")
var clearEl = document.querySelector("#clear")


//JS variables
var Q1Answers = ["1. To parameterize a function call", "2. To complete a thought", "3. To define an object", "4. To settle a score!"];
var Q2Answers = ["1. To parameterize a function call", "2. To complete a thought", "3. To define an object", "4. To settle a score!"];
var Q3Answers = ["1. To parameterize a function call", "2. To complete a thought", "3. To define an object", "4. To settle a score!"];
var Q4Answers = ["1. To parameterize a function call", "2. To complete a thought", "3. To define an object", "4. To settle a score!"];
var answerKey = {
    questionOne: "A1",
    questionTwo: "A3",
    questionThree: "A2",
    questionFour: "A4",
}
//function defintions
function startQuiz() {
    console.log("Quiz has started!");
    console.log(window);
    clearcontent('clear');
    newBlock();
}
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
//Create a new question block
function newBlock() {
    var newBlock = document.createElement("h1")
    var newQuestion = document.createTextNode("Where are arguments used?")
    var questionId = 1
    newBlock.appendChild(newQuestion);
    currentBlock = document.getElementById("q-block");
    document.body.insertBefore(newBlock, currentBlock);
    newBlock.style.paddingLeft = "20%";
    newBlock.style.paddingTop = "5%";
    newBlock.style.paddingBottom = "4%";
    console.log("This is question " + questionId);

    //Create 4 answer buttons for the current question    
    for (i = 0; i < Q1Answers.length; i++) {
        var answer = Q1Answers[i];
        var newButton = document.createElement("h4");
        var button = document.createElement("button");
        button.textContent = answer;
        newButton.appendChild(button);
        currentAnswer = document.getElementById("a-block");
        document.body.insertBefore(newButton, currentAnswer);
        newButton.style.paddingLeft = "20%";
        newButton.children[0].style.backgroundColor = "purple";
        newButton.children[0].style.color = "white";
        newButton.children[0].id = "aButton" + [i];
        console.log(answer);
        console.log(button);
    }
    aButton0.addEventListener("click", aButtonClick);
    aButton1.addEventListener("click", aButtonClick);
    aButton2.addEventListener("click", aButtonClick);
    aButton3.addEventListener("click", aButtonClick);
}

function aButtonClick() {
    console.log("You clicked " + this.id);
    //check answer
    if (questionId = 1 && this.id === "aButton0") {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

}
//events
startButton.addEventListener("click", startQuiz);
