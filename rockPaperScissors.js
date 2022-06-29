console.log("Hello world!");

const computerPlay = () => {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) return "rock";
    if (number === 1) return "paper";
    if (number === 2) return "scissors";

}

const rockPaperScissors = () => {
    const playerSelection = prompt("Please choose rock, paper, or scissors");
    const computerSelection = computerPlay();
    playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") return "Player wins!";
    if (playerSelection === "rock" && computerSelection === "paper") return "Computer wins!";
    if (playerSelection === "paper" && computerSelection === "rock") return "Player wins!";
    if (playerSelection === "paper" && computerSelection === "scissors") return "Computer wins!";
    if (playerSelection === "scissors" && computerSelection === "paper") return "Player wins!";
    if (playerSelection === "scissors" && computerSelection === "rock") return "Computer wins!";
    if (playerSelection === computerSelection) return "It's a tie!";
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        let result = rockPaperScissors();
        console.log(result)
    }
}