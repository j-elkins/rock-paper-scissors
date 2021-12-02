let playerPoints = 0;
let computerPoints = 0;

// write function computerPlay that randomly returns 1 of 3 values
const optionsList = ["rock", "paper", "scissors"];

function computerPlay(options) {
  let turn = options[Math.floor(Math.random() * options.length)];
  return turn;
}

// write function playSingleRound with parameters playerSelection and computerSelection
function playSingleRound(buttonClicked) {
  let playerSelection = buttonClicked;
  console.log("Player chooses: " + playerSelection);
  let computerSelection = computerPlay(optionsList);
  console.log("Computer chooses: " + computerSelection);

  // returns a string to declare winner: "You win! x beats y"
  // keep a running tally in results div
  const resultsDiv = document.querySelector("#roundResults");

  if (playerSelection == computerSelection) {
    resultsDiv.textContent = "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    resultsDiv.textContent = "Paper beats rock. You lose!";
    computerPoints += 1;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    resultsDiv.textContent = "Rock beats scissors. You win!";
    playerPoints += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    resultsDiv.textContent = "Paper beats rock. You win!";
    playerPoints += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    resultsDiv.textContent = "Scissors beat paper. You lose!";
    computerPoints += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    resultsDiv.textContent = "Rock beats scissors. You lose!";
    computerPoints += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    resultsDiv.textContent = "Scissors beat paper. You win!";
    playerPoints += 1;
  }

  evaluateResults();
}

function evaluateResults() {
  const computerScore = document.querySelector("#computerScore");
  computerScore.textContent = computerPoints;

  const playerScore = document.querySelector("#playerScore");
  playerScore.textContent = playerPoints;

  if (playerPoints == 5 || computerPoints == 5) {
    announceWinner();
  }
}

function announceWinner() {
  const buttonContainer = document.querySelector("#buttonContainer");
  buttonContainer.classList.add("hidden");

  const finalContainer = document.querySelector("#finalContainer");
  finalContainer.classList.remove("hidden");

  const winner = document.querySelector("#winnerAnnouncement");

  if (playerPoints == 5) {
    winner.textContent = "Congratulations! You win";
    winner.classList.add("winner");
  }

  if (computerPoints == 5) {
    winner.textContent = "Sorry, you lose. Play again?";
    winner.classList.add("loser");
  }
}

// instead of prompt, use buttons to choose playerSelection
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  let buttonClicked = "rock";
  playSingleRound(buttonClicked);
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  let buttonClicked = "paper";
  playSingleRound(buttonClicked);
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  let buttonClicked = "scissors";
  playSingleRound(buttonClicked);
});

// add button to play again after game over
const againBtn = document.querySelector("#againBtn");
againBtn.addEventListener("click", () => {
  document.location.reload();
});
