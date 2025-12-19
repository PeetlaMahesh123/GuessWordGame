let words = ["APPLE", "ORANGE", "MOBILE", "COMPUTER", "PYTHON", "JAVASCRIPT", "WEBSITE", "KEYBOARD"];
let selectedWord = "";
let displayWord = [];
let attemptsLeft = 6;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWord = Array(selectedWord.length).fill("_");
    attemptsLeft = 6;

    document.getElementById("wordDisplay").textContent = displayWord.join(" ");
    document.getElementById("attempts").textContent = attemptsLeft;
    document.getElementById("message").textContent = "";
}

function guessLetter() {
    let input = document.getElementById("letterInput").value.toUpperCase();
    document.getElementById("letterInput").value = "";

    if (!input.match(/[A-Z]/)) {
        document.getElementById("message").textContent = "Enter only letters!";
        return;
    }

    let correct = false;

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === input) {
            displayWord[i] = input;
            correct = true;
        }
    }

    document.getElementById("wordDisplay").textContent = displayWord.join(" ");

    if (!correct) {
        attemptsLeft--;
    }

    document.getElementById("attempts").textContent = attemptsLeft;

    if (displayWord.join("") === selectedWord) {
        document.getElementById("message").textContent = "🎉 You Win!";
    }

    if (attemptsLeft === 0) {
        document.getElementById("message").textContent = "❌ You Lost! Word was: " + selectedWord;
    }
}

function restartGame() {
    startGame();
}

startGame();
