let rain = true
if(rain){
    console.log("i will take my umbrella")
}

else{
    console.log("i will stay at home")
}

let myNumber = 20
if(myNumber <= 19){
    console.log(myNumber  +  " is not less or equal to 19")
}
else if(myNumber >= 21){
    console.log(myNumber  +  " is not greater or equal is 21")
}

else if(myNumber <= 15){
    console.log(myNumber  +  " is not less than or equal to 20")
}

else{
    console.log("No option left")
}

rain ? console.log("i will take my umbrella") :  console.log("i will stay at home")

let isSick = true
console.log(isSick)
if(isSick){
    console.log("he will go to the hospital")
}

if(!isSick){
    console.log("he will go to school")
}

let time = "00:30"
if(time === "7:30"){
  console.log("It's early in the morning")
} else if(time === "12:30"){
  console.log("It's mid-day")
} else if (time === "16:30"){
  console.log("It's time for dinner")
} else if (time === "22:30"){
  console.log("It's time to go to bed")
} else if(time === "6:30"){
  console.log("It's time to wake up")
} else{
  console.log("No condition met")
}
