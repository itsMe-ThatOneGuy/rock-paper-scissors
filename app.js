const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
let playerScore = 0;
let computerScore = 0;



function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame () {
   const playerSelection = this.dataset.button;
   const computerSelection = computerPlay();
   console.log("Player: " + playerSelection + "  " + "computer: " + computerSelection);

   if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) 
        {
            console.log("You win! " + playerSelection + " beats " + computerSelection);
            playerScore++;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) 
        {
            console.log("You lose. " + computerSelection + " beats " + playerSelection);
            computerScore++;
            
    } else {
        console.log("Tie game. No winner")
        return;
    }
}



rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);
