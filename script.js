function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) return "rock";
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let input = prompt("Choose rock, paper or scissors to play: ");
    if (input === "rock") return "rock";
    else if (input === "paper") return "paper";
    else if (input === "scissors") return "scissors";
    else return "";
}

let humanScore = 0;
let computerScore = 0;