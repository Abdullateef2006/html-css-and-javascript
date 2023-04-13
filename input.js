let Num = Number(prompt("Enter a number from 1 to 10"))
let Num1 = Math.random() * 10
Num1 = Math.floor(Num1)
if(Num > Num1){
   
    console.log(Num + " is greater than " + Num1)
} else if(Num < Num1){

    console.log(Num + " is less than " + Num1)
} else if(Num === Num1){
   
    console.log(Num + " is equal to " + Num1)
} else{
    console.log(Num + " is not equal or greater than " + Num1)
}