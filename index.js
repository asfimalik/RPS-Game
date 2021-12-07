 function rpsGame(yourChoice){
   //  console.log(yourChoice)
var humanChoice, botChoice
playerChoice = yourChoice.id
console.log("Player Choice is ", playerChoice)
botChoice = allObject(randomNum())
console.log("computer Choice is ",botChoice)
var result = getWinner(yourChoice,botChoice)
console.log(result)
 
}
function randomNum(){

    return Math.floor(Math.random() * 3)
}

function allObject(Number){

    return ["paper" , "rock" , "scissor" ][Number]
 
}
function getWinner(yourChoice,botChoice){
var scoreTable = {

   "paper": { "rock": 1, " paper": 0.5,"scissor": 0},
   "rock" : { "scissor": 1, " rock": 0.5, "paper": 0},
   "scissor" : { "paper": 1, "scissor": 0.5, "rock": 0}
}
var playerScore = scoreTable[playerChoice][botChoice]
var botScore = scoreTable[botChoice][playerChoice]
return [playerScore,botScore]

}

