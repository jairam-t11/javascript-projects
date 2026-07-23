let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let checkButton = document.getElementById("checkButton");
let restartButton = document.getElementById("restartButton");

function generateNumbers() {
    firstNumberElement.textContent = Math.ceil(Math.random() * 100);
    secondNumberElement.textContent = Math.ceil(Math.random() * 100);
}

// Generate numbers when the page loads
generateNumbers();

checkButton.onclick = function() {
    let firstNumber = parseInt(firstNumberElement.textContent);
    let secondNumber = parseInt(secondNumberElement.textContent);
    let userAnswer = parseInt(userInputElement.value);

    if (userAnswer === firstNumber + secondNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
};

restartButton.onclick = function() {
    generateNumbers();
    userInputElement.value = "";
    gameResult.textContent = "";
    gameResult.style.backgroundColor = "";
};
