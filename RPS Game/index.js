const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;


buttons.forEach(button => {
    button.addEventListener('click',() => {
       const result = playRound(button.id, computerPlay());
       resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerselection,computerselection) {
    if ( playerselection=== computerselection){
        return "It's a tie😊";
    } else if (
        (playerselection=== "rock" && computerselection === "scissor") ||
        (playerselection=== "paper" && computerselection === "rock") ||
        (playerselection=== "scissor" && computerselection === "paper") 
    ) {  playerScore++;
        playerScoreEl.textContent= playerScore;
        return "You win! " +       playerselection +  " beats " + computerselection + "🎉";
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerselection +  " beats " + playerselection + "😭" ;
    }
}