let humanScore = 0;
    let computerScore = 0;

    function getCompChoice() { // this function gets the computers rock paper or scissors
        return Math.floor(Math.random() * 3); // gets a number 0, 1, 2, 0 = rock, 1 = paper, 2 = scissors
    }

    function changeSelToNum(playerChoice) {
        switch (playerChoice.toLowerCase()){
            case "rock": return 0;
            case "paper": return 1;
            case "scissors": return 2;
            default: return 0;
        }
        
    }

    function changeNumToSel(number) {
        switch (number) {
            case 0: return "Rock";
            case 1: return "Paper";
            case 2: return "Scissors";
        }
    }
    
    function playRPS(button) {
        let compChoice = getCompChoice()
        let playerChoice = changeSelToNum(button)
        if (playerChoice > 2 || playerChoice < 0) {
            console.warn("Enter a number between 0-2");
        } else {
            if (playerChoice == compChoice) {
                results.innerText = "Tie game";
                gamePlay.innerText = changeNumToSel(playerChoice) + " ties with " + changeNumToSel(compChoice);
            } else if (playerChoice == 0 && compChoice == 2) {
                results.innerText = "You Win";
                gamePlay.innerText = changeNumToSel(playerChoice) + " beats " + changeNumToSel(compChoice);
                humanScore += 1;
            } else if (playerChoice == compChoice + 1) {
                results.innerText = "You Win";
                gamePlay.innerText = changeNumToSel(playerChoice) + " beats " + changeNumToSel(compChoice);
                humanScore += 1;
            } else {
                results.innerText = "You Lose";
                gamePlay.innerText = changeNumToSel(playerChoice) + " loses to " + changeNumToSel(compChoice);
                computerScore += 1;
            }
        }
        displayScore()
    }

    function reset() {
        humanScore = 0;
        computerScore = 0;
        playerScore.innerText = "";
        compScore.innerText = "";
    }

    function displayScore() {
        playerScore.innerText  = "Player score " + humanScore;
        compScore.innerText  = "Computer score " + computerScore;
        if (humanScore == 5) {
            winner.innerText  = "The Winner is the Player!"
        }
        if (compScore == 5) {
            winner.innerText = "The Winner is the Computer!"
        }
    }

    function playRounds(numRounds) {
        for (let i = 0; i < numRounds; i++) {
            playRPS()
            displayScore()
        }
        if (humanScore == computerScore) {
            console.log("It's a tie!")
        } else {
            let winner = humanScore > computerScore ? "You are" : "The computer is"
            console.log(winner + " the winner!");
        }
    }

    const buttons = document.querySelectorAll(".options");
    buttons.forEach((button) => {
        button.addEventListener("click", function(){
            playRPS(button.innerText);
        });
    });

    const results = document.querySelector("#results");
    const playerScore = document.querySelector("#playerScore");
    const compScore = document.querySelector("#compScore");
    const winner = document.querySelector('#winner');
    const gamePlay = document.querySelector('#gamePlay');
