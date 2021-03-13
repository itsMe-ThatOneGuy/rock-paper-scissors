const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
let playerScore = 0;
let computerScore = 0;

function socreUpdater (playerScore, computerScore) {
    const player = document.querySelector('#player-score');
    player.innerHTML = playerScore.toString();
    const computer = document.querySelector('#computer-score');
    computer.innerHTML = computerScore.toString();
}

function gameLog (winner, playerSelection, computerSelection) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    if (winner === "player") {
        li.textContent = "You win! " + playerSelection + " beats " + computerSelection;
    } else if (winner === "computer") {
        li.textContent = "You lose. " + computerSelection + " beats " + playerSelection;
    } else {
        li.textContent = "Tie game. No winner";
    }
    ul.appendChild(li)
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        winnerMessage(playerScore);
        removeEvent()
        return true;
    } else if (computerScore === 5) {
        winnerMessage(playerScore);
        removeEvent();
        return true;
    } else {
        return false;
    }
}

function winnerMessage (playerScore){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    if (playerScore === 5) {
        li.textContent = "You win! Press F5 to play again";
    } else {
        li.textContent = "You Lost. Press F5 to play again";
    }
    ul.appendChild(li);
}

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
   if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) 
        {
            playerScore++;
            const winner = "player";
            gameLog(winner, playerSelection, computerSelection);
            socreUpdater(playerScore, computerScore); 
            gameOver(playerScore, computerScore);
        } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) 
        {
            computerScore++;
            const winner = "computer";
            gameLog(winner, playerSelection, computerSelection);
            socreUpdater(playerScore, computerScore); 
            gameOver(playerScore, computerScore);    
        } else {
        const winner = "tie";
        gameLog(winner, playerSelection, computerSelection);
    } 
}

function removeEvent () {
    rockButton.removeEventListener('click', playGame);
    paperButton.removeEventListener('click', playGame);
    scissorsButton.removeEventListener('click', playGame);
}

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);
