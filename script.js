function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    let playerSel = playerSelection.toLowerCase();
    let choices = ['rock', 'paper', 'scissors'];
    
    // make sure player input is valid
    if (choices.indexOf(playerSel) === -1) {
        return "Please enter valid choice: rock, paper, scissors";
    }

    // check for winner
    if (playerSel === "rock") {
        switch(computerSelection) {
            case "rock":
                return "Tie! You both chose rock!";
                break;
            case "paper":
                return "You lose! Paper beats rocks!";
                break;
            case "scissors":
                return "You win! Rock beats scissors!";
                break; 
        }
    } else if (playerSel === "paper") {
        switch(computerSelection) {
            case "rock":
                return "You win! Paper beats rock!";
                break;
            case "paper":
                return "Tie! You both chose paper!";
                break;
            case "scissors":
                return "You lose! Scissors beats paper!";
                break;
        }
    } else if (playerSel === "scissors") {
        switch(computerSelection) {
            case "rock":
                return "You lose! Rock beats scissors!";
                break;
            case "paper":
                return "You win! Scissors beats paper!";
                break;
            case "scissors":
                return "Tie! You both chose scissors!";
                break;
        }
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("Rock, paper, scissors? "), computerPlay());
    }
}