const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');

let playerChoice = '';
let computerChoice = '';

let result = document.getElementById('result');
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let resultArea = document.getElementById('results-area');

function computerSelectsAMove() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        computerChoice = "paper";
    } else if (randomNumber === 1) {
        computerChoice = "rock";
    } else {
        computerChoice = "scissors";
    }
}

function decideWinner() {
    if (playerChoice === computerChoice) {
        result.innerHTML=("It's a tie");
        resultArea.style.backgroundColor = '#e9c46a';
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        result.innerHTML=("You win!");
        resultArea.style.backgroundColor = '#2a9d8f';
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        result.innerHTML=("Computer wins!");
        resultArea.style.backgroundColor = '#e76f51';
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        result.innerHTML=("Computer wins!");
        resultArea.style.backgroundColor = '#e76f51';
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        result.innerHTML=("You win!");
        resultArea.style.backgroundColor = '#2a9d8f';
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        result.innerHTML=("Computer wins!");
        resultArea.style.backgroundColor = '#e76f51';
    } else { 
        // if player chooses scissors and computer chooses paper
        result.innerHTML=("You win!");
        resultArea.style.backgroundColor = '#2a9d8f';
    }
    player.innerHTML=(`Your choice: ${playerChoice}`);
    computer.innerHTML=(`Computer choice: ${computerChoice}`);
}

function main() {
    rock_button.addEventListener("click", () => runGame('rock'));
    paper_button.addEventListener("click", () => runGame('paper'));
    scissors_button.addEventListener("click", () => runGame('scissors'));
}

function runGame(pchoice) {
    playerChoice = pchoice;
    computerSelectsAMove();
    decideWinner();
}

main();