"use strict";

//Functions

const generateSecretNumber = () => Math.trunc(Math.random() * 20 + 1);

const setMessage = message => (gameMessage.textContent = message);

const setStyles = function (color, width) {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".number").style.width = width;
};

const checkButtonClick = function () {
  //Save user guess and turned it to number
  const userGuess = Number(userGuessEl.value);
  let score = Number(userscore.textContent);

  //Check for empty user guess
  if (!userGuess) {
    setMessage("⛔No number!");

    //User guessed secret number
  } else if (userGuess === secretNumber) {
    setMessage("🎉Correct number!");
    numberBox.textContent = secretNumber;
    //set wining styles
    setStyles("#60b347", "30rem");
    //set highcore
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    //Not correct guess
  } else {
    if (score > 0) {
      //Lower core
      score--;
      //Higher than secret number
      if (userGuess > secretNumber) {
        setMessage("📈Too High!");

        //Lower than secret number
      } else {
        setMessage("📉Too Low!");
      }
      if (!score) {
        setMessage("💥You have lost the game!");
      }
      userscore.textContent = score;
    }
  }
};

const againButtonClick = function () {
  secretNumber = generateSecretNumber();
  userscore.textContent = 20;
  setMessage("Start guessing...");
  numberBox.textContent = "?";
  userGuessEl.value = "";
  setStyles("#222", "15rem");
};
//Starting variables

const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const gameMessage = document.querySelector(".message");
const numberBox = document.querySelector(".number");
const userscore = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const userGuessEl = document.querySelector(".guess");

let highscore = 0;

//1. GENERATE RANDOM NUMBER
let secretNumber = generateSecretNumber();

//2. USER INPUT NUMBER
//check button functionality
checkButton.addEventListener("click", checkButtonClick);

//3.Again button functionality
againButton.addEventListener("click", againButtonClick);
