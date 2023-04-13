// let i = 0
// while(i <= 10){
//     console.log("The value of i is: " +i)
//     i += 2
// }
// let person = ["Abdullateef","Sodiq","Habeeb","Latifat","Sekinat"]
// let notFound = true

// while(notFound && person.length > 0){
//     if(person[0] === "Abdullateef"){
//         console.log("nameFound")
//         notFound = false
//     } else {
//         person.shift()
//     }
// }

// let numOne = 0
// let numTwo = 1
// let sum 
// let arrFib = []

// while(arrFib.length < 15){
//     arrFib.push(numOne)
//     sum = numOne + numTwo
//     numOne = numTwo
//     numTwo = sum
// }
// console.log(arrFib)


// let firstnum = 0
// let secondnum = 1
// let addition 
// let fib = []

// do{ 
//     fib.push(firstnum)
//     addition = firstnum + secondnum
//     firstnum = secondnum
//     secondnum = addition
// } while(fib.length < 15)
// console.log(fib)

// const maxValue = 9
// const random = Math.floor(Math.random() * 9) + 1
// let correct = false
// while(!correct){
//     let guess = Number(prompt("Guess a number 1 - " + maxValue))
//         if(guess === random){
//             correct = true
//             console.log("you got it right " + random)
//         } else if(guess > random){
//             console.log("The number you guess is too high")
//         } else {
//             console.log("The number you guess is too low")
//         } 
// }

// let i = 0 
// do{
//     console.log(i)
//     i++
// } while(i < 10)
   
// let counter = 0
// let step = 5
// let inc = counter + step
// do{
//     // console.log(counter)
    
//     console.log(inc)
//     inc *= 2 
// } while(inc <= 100)

for(j = 0; j < 10; j += 2){
    console.log(j)
    
}

let arr = []
for(k = 0; k <= 100; k += 2){
    arr.push(k)
}
console.log(arr)

let arr2 = []
for(i = 1; i < 10; i++){
    let status = i % 2 ? true : false
    let temp = {
        name: `subject ${i}`, status : status
    }
    arr2.push(temp)
   
}console.log(arr2);


let counter = 0
let step = 8

for (let n = counter + step ; n <= 100; n *= 2) {
    // console.log(counter);
    console.log(n);
    
}

let myNames = ["Abdullateef","Sodiq","Habeeb","Jimoh"]
counter = 0
console.log("Names:\n")
while(counter < myNames.length) {
    console.log("\t", myNames[counter])
    counter += 1
}
