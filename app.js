let plrScore = 0;
let cmptScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (plrScore === 5 || cmptScore === 5) {
        return;
    }

    const score = document.querySelector('#score');
    const outcome = document.querySelector('#outcome');

    const winOutcomes = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    // Test for draw
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        outcome.textContent = `Draw! You both picked ${computerSelection}`
        return;
    }

    // Test for win
    if (winOutcomes[playerSelection.toLowerCase()] === computerSelection.toLowerCase()) {
        plrScore++;
        score.textContent = `${plrScore} - ${cmptScore}`;
        outcome.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        cmptScore++;
        score.textContent = `${plrScore} - ${cmptScore}`;
        outcome.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    if (plrScore === 5 || cmptScore === 5) {
        game();
    }
}

function game() {
    const winner = document.querySelector('#winner');
    if (plrScore > cmptScore) {
        winner.textContent = 'Player Wins!';
    } else {
        winner.textContent = 'Computer Wins!';
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});
