let game = ["Rock","Paper","Scissors"]
let computerRandom = Math.floor(Math.random() * game.length)
let computer = game[computerRandom]
let userRandom = Math.floor(Math.random() * game.length)
let user = game[userRandom]
let result = "The result: "
if(computer === user){
    result += " It is a tie"
} else if(computer === "Rock" &&  user === "Paper"){
    result += "user wins"
} else if(computer === "Scissors" && user === "Rock"){
    result += "user wins"
} else if(computer === "Paper" && user === "Scissors"){
    result += "user wins"
    
} else if(computer === "Paper" && user === "Rock"){
    result += "computer wins"
} else if(computer === "Rock" && user === "Scissors"){
    result += "computer wins"
} else if(computer === "Scissors" && user === "Paper"){
    result += "computer wins"
} else{
    result += "There is no such value in the game"
}
console.log(result)
