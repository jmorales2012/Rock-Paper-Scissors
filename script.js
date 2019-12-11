const body = document.querySelector('.container');
let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', playRound);
});

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function compareChoices(playerChoice, computerChoice) {
  let result;
  if (playerChoice === computerChoice) {
    result = 'Draw';
  } else if (
    playerChoice === 'Rock' && computerChoice === 'Scissors'
    || playerChoice === 'Paper' && computerChoice === 'Rock' 
    || playerChoice === 'Scissors' && computerChoice === 'Paper') {
      result = 'Win';
    } else {
      result = 'Lose';
    }
    return result;
}

function updateScore(result) {
  if (result === 'Win') {
    playerScore++;
  } else if (result === 'Lose') {
    computerScore++;
  }
}

function updateDisplay(playerChoice, computerChoice, result) {
  let playerScoreDisplay = document.querySelector('.player-score');
  let computerScoreDisplay = document.querySelector('.computer-score');
  let roundResultDisplay = document.querySelector('.round-result');
  let playerChoiceDisplay = document.querySelector('.player-choice');
  let computerChoiceDisplay = document.querySelector('.computer-choice');

  playerScoreDisplay.innerText = `Player Score:  ${playerScore}`;
  computerScoreDisplay.innerText = `Computer Score:  ${computerScore}`;
  playerChoiceDisplay.innerText = `Player Choice: ${playerChoice}`;
  computerChoiceDisplay.innerText = `Computer Choice: ${computerChoice}`;
  roundResultDisplay.innerText = result[0].toUpperCase() + result.slice(1);
}

function decideGame() {
  let decision = '';
  if (playerScore === 5) {
    decision = 'Game over. You Win!';
  } else if (computerScore === 5) {
    decision = 'Game over. You Lose!'
  }

  if (decision) {
    buttons.forEach(btn => {
      btn.removeEventListener('click', playRound);
    });
    updateDecisionDisplay(decision);
  }
}

function updateDecisionDisplay(decision) {
  let decisionDisplay = document.querySelector('.round-result');
  decisionDisplay.innerText = decision;
}

function playRound(e) {
  // uppercase player choice
  let playerChoice = e.target.id[0].toUpperCase() + e.target.id.slice(1);
  let computerChoice = computerPlay();
  let result = compareChoices(playerChoice, computerChoice);
  updateScore(result);
  updateDisplay(playerChoice, computerChoice, result);
  decideGame();
}