function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const winOutcomes = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    // Test for draw
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return [`Draw! You both picked ${computerSelection}`, 0, 0];
    }

    // Test for win
    if (winOutcomes[playerSelection.toLowerCase()] === computerSelection.toLowerCase()) {
        return [`You Win! ${playerSelection} beats ${computerSelection}`, 1, 0];
    }
    return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
}

function game() {
    let plrScore = 0;
    let cmptScore = 0;

    for (let i = 0; i < 5; i++) {
        roundOutcome = playRound(prompt('Rock, paper, or scissors?'), getComputerChoice())
        plrScore += roundOutcome[1];
        cmptScore += roundOutcome[2];
        console.log(roundOutcome[0]);
    }

    if (plrScore > cmptScore) {
        console.log(`You Win! ${plrScore} - ${cmptScore}`);
    } else if (plrScore < cmptScore) {
        console.log(`You Lose! ${plrScore} - ${cmptScore}`);
    } else {
        console.log(`Draw! ${plrScore} - ${cmptScore}`);
    }
}

game();
