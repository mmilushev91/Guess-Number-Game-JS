"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector(".score").textContent;
let highscore = 0;

//Adding Check button functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    displayMessage("⛔No Number!");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct number");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Change background color and number width on correct number
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else {
    if (score >= 1) {
      score--;

      displayMessage(guess > secretNumber ? "📈Too High!" : "📉Too Low!");

      if (score === 0) displayMessage("💥You have lost the game!");
    }
  }
  document.querySelector(".score").textContent = score;
});

//Adding Again btn fuctionality

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
