const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');

let playerChoice = '';
let computerChoice = '';

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

console.log('hello');