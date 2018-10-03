let playerScore = 0;
let playerChoice;
let compScore = 0;
let compChoice;

function gameLogic() {
    playerChoice = prompt("Choose rock, paper, or scissor")
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissor') {
        if (playerChoice == 'rock') {
            if (compChoice == 'paper') {
                compScore++;
            } else if (compChoice == 'scissor') {
                playerScore++;
            }
        } else if (playerChoice == 'paper') {
            if (compChoice == 'scissor') {
                compScore++;
            } else if (compChoice == 'rock') {
                playerScore++;
            }
        } else if (playerChoice == 'scissor') {
            if (compChoice == 'rock') {
                compScore++;
            } else if (compChoice == 'paper') {
                playerScore++;
            }
        }

        if (playerScore === 3) {
            console.log("You win!");
        } else if (compScore === 3) {
            console.log("You lose!");
        }

        console.log("You choose " + playerChoice);
        console.log("Computer choose " + compChoice);
        console.log("Your score : " + playerScore);
        console.log("Computer score : " + compScore);
    } else {
        alert("Please type rock, paper, or scissor")
    }

}

function getCompChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    compChoice = choices[Math.floor(Math.random() * choices.length)]
}

function game() {
    while (playerScore < 3 && compScore < 3) {
        getCompChoice();
        gameLogic()
    }
}

game();