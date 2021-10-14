// write function computerPlay that randomly returns 1 of 3 values

let optionsList = [" rock", " paper", " scissors"];

function computerPlay(option) {
  let turn = option[Math.floor(Math.random() * option.length)];

  return turn;
}

let computerSelection = computerPlay(optionsList);
console.log("Computer chooses: " + computerSelection);

// prompt player to for input. make playerSelection input case insensitive
// check that input is valid (rock, paper, or scissors - else, error)

let playerSelection = prompt("Make your move: rock, paper, or scissors?");

if (playerSelection.toLowerCase() == ("rock" || "paper" || "scissors")) {
  console.log("Player chooses: " + playerSelection);
} else {
  console.log("Error");

  let secondSelection = prompt(
    "Invalid answer, try again: rock, paper, or scissors?"
  );
  console.log("Player chooses: " + secondSelection);
}
// ^fix this to continually prompt until correct input is given. while loop??

// write  function singleRound that plays one round
// takes two parameters: playerSelection and computerSelection

function singleRound() {
  if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("Tie");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("Lose");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Win");
  }
}

singleRound(playerSelection, computerSelection);

// when the function runs it returns a string to declare the winner
// so function needs to know which option "wins"
// rules:  rock >  scissors,  scissors >  paper,  paper >  rock

// if playerSelection ==  rock &
//   computerSelection ==  scissors -> return("Player wins!")
//   computerSelection ==  paper -> return("Computer rins!")
//   computerSelection ==  rock -> return("Tie!")
// if playerSelection ==  scissors &
//   computerSelection ==  scissors -> return("Tie!")
//   computerSelection ==  paper -> return("Player rins!")
//   computerSelection ==  rock -> return("Computer wins!")
// if playerSelection ==  paper &
//   computerSelection ==  scissors -> return("Commputer wins!")
//   computerSelection ==  paper -> return("Tie!")
//   computerSelection ==  rock -> return("Player wins!")

// format "You Lose! x beats y"

// return results of this function

// write function game() to run singleRound 5 times (either loop or run 5 times)
// console.log results of each round
// function game() keeps score and reports winner or loser at the end
// prompt() gets input from user
