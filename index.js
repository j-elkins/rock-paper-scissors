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
function askUser() {
  let answer = prompt("Choose rock, paper, or scissors: ").toLowerCase();
  while (optionsList.includes(answer) == false) {
    answer = prompt("Incorrect, please choose again").toLowerCase();
  }
  return answer;
}
// write  function singleRound that plays one round
// takes two parameters: playerSelection and computerSelection
function singleRound() {
  let playerSelection = askUser();
  let computerSelection = computerPlay(optionsList);
  console.log("Computer chooses: " + computerSelection);

  // returns a string to declare winner, format "You Lose! x beats y"
  // function needs to know rules:  rock >  scissors,  scissors >  paper,  paper >  rock

  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("Paper beats rock. You lose!");
    computerPoints += 1;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Rock beats scissors. You win!");
    playerPoints += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Paper beats rock. You win!");
    playerPoints += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("Scissors beat paper. You lose!");
    computerPoints += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("Rock beats scissors. You lose!");
    computerPoints += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("Scissors beat paper. You win!");
    playerPoints += 1;
  }
}

// write function game() to run singleRound 5 times (either loop or run 5 times)
// console.log results of each round and reports winner or loser at the end
const numberOfTurns = 5;
let turnIndex = 0;

function playGame() {
  while (turnIndex < numberOfTurns) {
    singleRound();
    turnIndex++;
    console.log(
      "ROUND " +
        turnIndex +
        ". " +
        "Player: " +
        playerPoints +
        " Computer: " +
        computerPoints
    );
  }
  if (playerPoints > computerPoints) {
    console.log("Congratulations! You are the winner!");
  } else if (computerPoints > playerPoints) {
    console.log("You lose. Better luck next time.");
  } else {
    console.log("It's a tie. Play again?");
  }
}

playGame();
