const inputField = document.querySelector(".inputSection"); // inputField is better naming
const guessButton = document.querySelector(".guessButton");
const resetButton = document.querySelector(".resetButton");
const currentProgress = document.querySelector(".currentProgress");
const attemptsId = document.querySelector(".currentProgress");

const count = 0;
const givenNumber = 15;

guessButton.addEventListener("click", function (e) {
  const userGuess = parseInt(inputField.value, 10);
  if (userGuess > givenNumber) {
    currentProgress.innerText = "Too high! Try again";
  } else if (userGuess < givenNumber) {
    currentProgress.innerText = "Too low! Try again!";
  } else if (userGuess === givenNumber) {
    currentProgress.innerText = "You guessed it right!";
    e.target.disabled = true;
  }
});

resetButton.addEventListener("click", function () {});

attemptsId.addEventListener("click", function () {
  attemptsId.innerText = "";
  guessButton.disabled = false;
});
