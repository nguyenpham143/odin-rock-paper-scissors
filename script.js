function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) return "rock";
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let input = prompt("Choose rock, paper or scissors to play: ");
    input = input.toLowerCase();
    if (input === "rock") return "rock";
    else if (input === "paper") return "paper";
    else if (input === "scissors") return "scissors";
    else return "";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie!");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("It's a tie!");
        } else {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore < computerScore) console.log("Computer is the winner!");
    else if (humanScore > computerScore) console.log("You are the winner!");
    else console.log("It's a tie!");

    humanScore = 0;
    computerScore = 0;
}