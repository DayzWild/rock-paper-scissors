const rock = 0;
const paper = 1;
const scissors = 2;
    
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0) {
        return rock;
    } else if(randomNumber === 1) {
        return paper;
    } else if(randomNumber === 2) {
        return scissors;
    }

}

function playRound(playerSelection, computerSelection) {
    
    if(computerSelection === scissors && playerSelection === "paper") {
        return "You lose! Scissors beats Paper.";
    } else if(computerSelection === paper && playerSelection === "rock") {
        return "You lose! Paper beats Rock.";
    } else if(computerSelection === rock && playerSelection === "scissors") {
        return "You lose! Rock beats Scissors.";
    } else if(computerSelection === paper && playerSelection === "scissors") {
        return "You win! Scissors beats Paper.";
    } else if(computerSelection === rock && playerSelection === "paper") {
        return "You win! Paper beats Rock.";
    } else if(computerSelection === scissors && playerSelection === "rock") {
        return "You win! Rock beats Scissors.";
    } else if(computerSelection === scissors && playerSelection === "scissors" ||
        computerSelection === rock && playerSelection === "rock" ||
        computerSelection === paper && playerSelection === "paper") {
        return "It's a tie. Try again!"
    }

}

function playGame() {

    let i = 0;
    let computerPoints = 0;
    let playerPoints = 0;
    let recentScore;
    
    function winOrLose() {
        if (computerPoints > playerPoints) {
            return "You lost. Try again?";
        } else if (computerPoints < playerPoints) {
            return "You won! Congratulations!";
        } else {
            return "There is no winner. It's a tie, would you like to play again?"
        }
    }

    while(i < 5) {
        let playerSelection = prompt();
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        function score() {

            if (result ===  "You lose! Scissors beats Paper." || result ===  "You lose! Paper beats Rock." || result ===  "You lose! Rock beats Scissors.") {
                computerPoints += 1;
                playerPoints = playerPoints;
                recentScore = "Computer Points: " + computerPoints + " | Your Points: " + playerPoints;
                return recentScore;
            } else if (result === "You win! Scissors beats Paper." || result ===  "You win! Paper beats Rock." || result ===  "You win! Rock beats Scissors.") {
                computerPoints = computerPoints;
                playerPoints += 1;
                recentScore = "Computer Points: " + computerPoints + " | Your Points: " + playerPoints;
                return recentScore;
            } else if (result === "It's a tie. Try again!") {
                recentScore = "Computer Points: " + computerPoints + " | Your Points: " + playerPoints;
                return recentScore;
            }

        }

        console.log(playRound(playerSelection, computerSelection));
        computerSelection = getComputerChoice();
        console.log(score());
        i++;
    }

    console.log(winOrLose());

}