// Game Configuration
const words = ["apple", "banana", "grape", "mango", "orange", "peach", "kiwi"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let maxAttempts = 5;
let attemptsLeft = maxAttempts;

console.log("Secret word for testing:", secretWord); // Debugging only

// DOM Elements
const input = document.getElementById("guessInput");
const message = document.getElementById("message");

// Show initial hint
window.onload = function () {
  showMessage(`Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'.`);
  input.focus();
};

// Handle User Guess
function submitGuess() {
  let userGuess = input.value.trim().toLowerCase();

  if (!userGuess) {
    attemptsLeft--;
    showMessage(`Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`);
  } else if (userGuess === secretWord) {
    showMessage("🎉 Congratulations! You guessed the secret word!");
    changeBackground("lightgreen");
    disableInput();
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      showMessage(`Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`);
    } else {
      showMessage(`❌ Game over! The secret word was '${secretWord}'.`);
      changeBackground("lightcoral");
      disableInput();
    }
  }

  input.value = "";
  input.focus();
}

// Show Feedback
function showMessage(text) {
  message.textContent = text;
}

// Disable Input
function disableInput() {
  input.disabled = true;
  document.querySelector("button").disabled = true;
}

// Restart Game
function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  attemptsLeft = maxAttempts;
  input.disabled = false;
  document.querySelector("button").disabled = false;
  input.value = "";
  changeBackground("#f4f4f4");
  input.focus();
  showMessage(`Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'.`);
  console.log("New secret word:", secretWord); // Debugging only
}

// Change Background Color
function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

// Optional: Allow Enter Key to Submit
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    submitGuess();
  }
});
