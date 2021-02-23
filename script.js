let playerScore = 0;
let computerScore = 0;

function computerPlay () {
   let randomNumber = Math.floor(Math.random() * 3);
   //console.log(randomNumber);
   if (randomNumber == 0) {
       return "rock";
   } else if (randomNumber == 1) {
       return "paper";
   } else {
       return "scissors";
   }
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) 
        {
            return "You win! " + playerSelection + " beats " + computerSelection;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) 
        {
            return "You lose. " + computerSelection + " beats " + playerSelection;
    } else {
        return "Tie game. No winner"
    }

}

function game () { 
  

   
}

const computerSelection = computerPlay();
const playerSelection = "rock"


console.log("player: " + playerSelection);
console.log("computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));