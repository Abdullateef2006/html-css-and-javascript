let prize = Number(prompt("Type in a number between 1 to 10"))
let  outputMessage = " My Selection: "
switch(prize){
   case 1:
        outputMessage +=  " Scorlarship, "
   case 2:
        outputMessage += " Head Boy "
        break
    case 3:
        outputMessage += " Assistant Head boy, "
    case 4:
        outputMessage += " Class Captain "
        break
    case 5:
        outputMessage += " Assistant Class Captain, "
    case 6: 
        outputMessage += " Supervisor "
        break
    case 7:
        outputMessage += " Labour Prefect, "
    case 8:
        outputMessage += " Social Prefect "
        break
    case 9:
        outputMessage += " Library Prefect, "
    case 10:
        outputMessage += " Labouratory Prefect "
    break
    default:
        outputMessage += "You did not meet the requirement "
}
console.log(outputMessage)
