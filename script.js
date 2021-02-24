let playerScore = 0;
let computerScore = 0;

//works
function computerPlay () {
   let randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber == 0) {
       return "rock";
   } else if (randomNumber == 1) {
       return "paper";
   } else {
       return "scissors";
   }
}

//works
function playerChoice () {
    let sign = prompt("Rock, Paper, Scissors?");
    if (sign.toLowerCase() == "rock") {
        return "rock";
    } else if (sign.toLowerCase() == "paper") {
        return "paper";
    } else if (sign.toLowerCase() == "scissors") {
        return "scissors";
    }
}

//works
function playRound () {
    const computerSelection = computerPlay();
    const playerSelection = playerChoice();
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

//works -- Not Needeed 
/*
function scoreUpdate (winner) {
    if (winner === "player") {
        playerScore++;
        console.log(playerScore + " " + computerScore);
    } else if (winner === "computer") {
        computerScore++;
        console.log(playerScore + " " + computerScore);
    }
}
*/

//works
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

//works
function game (){
    while (gameOver(playerScore, computerScore) != true) {
        playRound();
        console.log(playerScore + " " + computerScore);
    }

    winnerMessage(playerScore);
}

game();