let price = prompt("Enter a value between 0 to 10")
const timesOne = 1
let message = price*timesOne
switch(message){
    case 0:
    case 1:
    case 2:
    case 3:
        console.log("You will be awarded a scorlarship")
        break
    case 4:
    case 5:
    case 6:
    case 7:
        console.log("You will be awarded a prefectship position")
        break
    case 8:
    case 9:
    case 10:
        console.log("You are to repeat the class")
        break    
}
let a = price.concat(message)


