let playerScore = 0;
let computerScore = 0;

//works
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

//works
function playRound (playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) 
        {
            console.log("You win! " + playerSelection + " beats " + computerSelection);
            return "player";
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) 
        {
            console.log("You lose. " + computerSelection + " beats " + playerSelection);
            return "computer";
            
    } else {
        console.log("Tie game. No winner")
        return "tie";
    }
}

//works
function scoreUpdate (winner) {
    if (winner === "player") {
        playerScore++;
        console.log(playerScore + " " + computerScore);
    } else if (winner === "computer") {
        computerScore++;
        console.log(playerScore + " " + computerScore);
    }
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        winnerMessage(playerScore);
        return true;
    } else if (computerScore === 5) {
        winnerMessage(playerScore);
        return true;
    }
    return false;
}

//works
function winnerMessage (playerScore){
    if (playerScore === 5) {
        console.log("You Win!");
    } else {
        console.log("You Lose.");
    }
}


const computerSelection = computerPlay();
const playerSelection = "rock"


console.log("player: " + playerSelection);
console.log("computer: " + computerSelection);

console.log(gameOver(playerScore, computerScore))
