let playerPoints = 0;
let computerPoints = 0;

// write function computerPlay that randomly returns 1 of 3 values
const optionsList = ["rock", "paper", "scissors"];

function computerPlay(options) {
  let turn = options[Math.floor(Math.random() * options.length)];
  return turn;
}

// prompt player to for input. make playerSelection input case insensitive
// check that input is valid (rock, paper, or scissors - else, error)
// function askUser() {
//   let answer = prompt("Choose rock, paper, or scissors: ").toLowerCase();
//   while (optionsList.includes(answer) == false) {
//     answer = prompt("Incorrect, please choose again").toLowerCase();
//   }
//   return answer;
// }

// write function playSingleRound that plays one round
// takes two parameters: playerSelection and computerSelection
function playSingleRound(buttonClicked) {
  let playerSelection = buttonClicked;
  console.log("Player chooses: " + playerSelection);
  let computerSelection = computerPlay(optionsList);
  console.log("Computer chooses: " + computerSelection);

  // returns a string to declare winner, format "You Lose! x beats y"
  // function needs to know rules:  rock >  scissors,  scissors >  paper,  paper >  rock

  // keep a running tally in results div
  const resultsDiv = document.querySelector("#results");

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

  const compResults = document.querySelector("#computerResults");
  compResults.textContent = "Computer: " + computerPoints;

  const playerResults = document.querySelector("#playerResults");
  playerResults.textContent = "Player: " + playerPoints;

  const winner = document.querySelector("#winner");
  if (playerPoints == 5) {
    winner.textContent = "Congratulations! You win";
  }

  if (computerPoints == 5) {
    winner.textContent = "Sorry, you lose. Play again?";
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

// write function game() to run playSingleRound 5 times (either loop or run 5 times)
// console.log results of each round and reports winner or loser at the end
// const numberOfTurns = 5;
// let turnIndex = 0;

// function playGame() {
//   while (turnIndex < numberOfTurns) {
//     playSingleRound();
//     turnIndex++;
//     console.log(
//       "ROUND " +
//         turnIndex +
//         ". " +
//         "Player: " +
//         playerPoints +
//         " Computer: " +
//         computerPoints
//     );
//   }
//   if (playerPoints > computerPoints) {
//     console.log("Congratulations! You are the winner!");
//   } else if (computerPoints > playerPoints) {
//     console.log("You lose. Better luck next time.");
//   } else {
//     console.log("It's a tie. Play again?");
//   }
// }

// playGame();
