const playerSelectedRock = document.querySelector('#rock')
const playerSelectedPaper = document.querySelector('#paper')
const playerSelectedScissors = document.querySelector('#scissors')

var finalPlayerSelected = ""
var finalComputerSelected = ""
var result = ''
var computerScore = 0
var playerScore = 0



function getComputerSelection(finalComputerSelected) {
    const selection = ["rock", "scissors", "paper"];
    return (selection[Math.floor(Math.random()*selection.length)]);
}




playerSelectedPaper.onclick = () => {
    finalPlayerSelected = "paper"
    gameLogic()
}

playerSelectedRock.onclick = () => {
    finalPlayerSelected = "rock"
    gameLogic()
}

playerSelectedScissors.onclick = () => {
    finalPlayerSelected = "scissors"
    gameLogic()
}







function gameLogic (finalComputerSelected) {

    const playerResult = document.getElementById("result")
    const computerScoreText = document.getElementById("computerScore")
    const playerScoreText  = document.getElementById("playerScore")



    


    finalComputerSelected = getComputerSelection()
    console.log(finalPlayerSelected)
    console.log(finalComputerSelected)


    if (
        (finalComputerSelected === 'rock' && finalPlayerSelected === 'scissors') ||
        (finalComputerSelected === 'scissors' && finalPlayerSelected === 'paper') ||
        (finalComputerSelected === 'paper' && finalPlayerSelected=== 'rock')
      ) {
        console.log("Result: Computer Wins!")
        playerResult.innerHTML = "Result: Computer Wins!"
        computerScore++
        computerScoreText.innerHTML = "Computer Score: " + computerScore
      }

    else if (

        (finalPlayerSelected === "rock" && finalComputerSelected === "scissors") ||
        (finalPlayerSelected === "scissors" && finalComputerSelected === "paper") ||
        (finalPlayerSelected === "paper" && finalComputerSelected === "rock") 
        
     ) {
        console.log("Result: Player Wins")
        playerResult.innerHTML = "Result: Player Wins!" 
        playerScore++
        playerScoreText.innerHTML = "Player Score: " + playerScore
    }
    
    else {
        console.log("Result: Tie!")
        playerResult.innerHTML = "Result: Tie!"
    }



} 



