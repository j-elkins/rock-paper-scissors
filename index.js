let playerPoints = 0;
let computerPoints = 0;

function singleRound() {
  // write function computerPlay that randomly returns 1 of 3 values
  let optionsList = ["rock", "paper", "scissors"];

  function computerPlay(option) {
    let turn = option[Math.floor(Math.random() * option.length)];

    return turn;
  }

  // prompt player to for input. make playerSelection input case insensitive
  // check that input is valid (rock, paper, or scissors - else, error)

  function askUser() {
    let answer = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    if (answer == "rock" || answer == "paper" || answer == "scissors") {
      console.log("Player chooses: " + answer);
      return answer;
    } else {
      return askAgain();
    }
    function askAgain() {
      let answer = prompt("Incorrect, please choose again").toLowerCase();
      if (answer == "rock" || answer == "paper" || answer == "scissors") {
        console.log("Player chooses: " + answer);
        return answer;
      } else {
        askAgain();
      }
    }
  }

  //
  // let playerSelection = prompt("Make your move: rock, paper, or scissors?");

  // while (playerSelection.toLowerCase() !== "rock") {
  //   prompt("Try again");
  // }

  // if (playerSelection.toLowerCase() == ("rock" || "paper" || "scissors")) {
  //   console.log("Player chooses: " + playerSelection);
  // } else {
  //   console.log("Error");

  //   let secondSelection = prompt(
  //     "Invalid choice, try again: rock, paper, or scissors?"
  //   );
  //   console.log("Player chooses: " + secondSelection);
  // }

  // ^fix this to continually prompt until correct input is given. while loop??
  // maybe use initial variable 'choice', then final result of function is 'playerSelection'
  //

  // write  function singleRound that plays one round
  // takes two parameters: playerSelection and computerSelection

  let playerSelection = askUser();

  let computerSelection = computerPlay(optionsList);
  console.log("Computer chooses: " + computerSelection);

  // returns a string to declare winner, format "You Lose! x beats y"
  // function needs to know rules:  rock >  scissors,  scissors >  paper,  paper >  rock

  if (playerSelection == "rock" && computerSelection == "rock") {
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
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("It's a tie!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("Scissors beat paper. You lose!");
    computerPoints += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("Rock beats scissors. You lose!");
    computerPoints += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("Scissors beat paper. You win!");
    playerPoints += 1;
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log("It's a tie!");
  }
}

// singleRound(playerSelection, computerSelection);

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

// write function game() to run singleRound 5 times (either loop or run 5 times)
// console.log results of each round
// function game() keeps score and reports winner or loser at the end

// function game() {
//   singleRound();
//   console.log("round " + 1);
//   singleRound();
//   console.log("round " + 2);
//   singleRound();
//   console.log("round " + 3);
//   singleRound();
//   console.log("round " + 4);
//   singleRound();
//   console.log("round " + 5);
// }
// game();

let i = 0;

function game() {
  while (i < 5) {
    singleRound();
    i++;
    console.log(
      "ROUND " +
        i +
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

game();
