let randomNumber = Math.random() * 10
randomNumber = Math.floor(randomNumber)
console.log(randomNumber)

let randomNumber1 = Math.random() * 6
randomNumber1 = Math.floor(randomNumber1)
// let a = prompt("Input your name") 
switch(randomNumber1){
    case 0:
        console.log("You are from Nigeria")
        break
    case 1:
        console.log("You are from Ghana")
        break
    case 2:
        console.log("You are from South Africa")
        break
    case 3:
        console.log("You are from Zambia")
        break
    case 4:
        console.log("You are from Zimbabwe")
        break
    case 5:
        console.log("You are from Ethopia")
        break
    default:
        console.log("You are not an African")
        break
    
}