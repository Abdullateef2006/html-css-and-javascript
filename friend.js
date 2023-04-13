let friend = prompt("Enter your friend's name")
let result = "My friend: "
switch(friend){
    case "Sodiq":
        result +=  true
        break
    case "Habeeb":
        result +=  false
        break
    default:
        result += "I don't know him"

}
console.log(result)