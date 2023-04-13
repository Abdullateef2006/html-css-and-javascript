// function names() {
//     // console.log("Available here", value);
//     let values = "Hello World!"
//     console.log("Available here", values);
//     return values
// }
// names("As Salam Alaikum")
// console.log(value);
// names()
// console.log(values);
// let myName = names();
// console.log(myName);
// console.log(values);

// function myFunc() {
//     if (true) {
//         var x = "Local"
//     }
//     console.log(x);
// }
// myFunc()

// function myFunc() {
//     if (true) {
//         const x = "Local"

//     }
//     console.log(x); 
// }
// myFunc()

// let globalVar = "Accessible everywhere"
// console.log("Outside Function", globalVar);
// function myScope(a) {
//     console.log("Access to global varaible inside function", globalVar);
// }
// myScope("As Salam Alaykum")
// console.log("Still available", globalVar);

// let x = "Global"
// function myFunc(y) {
//     // let x = "Local"
//     console.log(y);
// }
// myFunc("Hello world!")
// console.log(x);

// function confuseReader() {
//     x = "Guess my Scope"
//     console.log("Inside the function" , x);
// }
// confuseReader()
// console.log("Outside the function", x);

// (function () {
//     console.log("This is my first IIFE");
// }
// )()


( ()=>{
    console.log("This is my first IIFE");
})()

let myAnonim = function() {
    console.log("I am anonymous");
}
myAnonim()

let myAnonym = function (a,b) {
    console.log(a + b);
}
myAnonym(3,5)

let mySum = function (x,y) {
    let result = x + y
    return result
}
// mySum(9,6)
console.log(mySum(9,6));

// let myAnonymous = function
// myAnonymous() {
//     let a = 7
//     let b = 8
//     let c = a + b
//     return c
// }
// console.log(myAnonymous());

// let myAnonym = function
// myAnonym()
setTimeout(funcOne, 1000)

