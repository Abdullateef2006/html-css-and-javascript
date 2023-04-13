function SayTaslim() {
    console.log("As salam alaykum");
}
SayTaslim()

function names(params) {
    return params
}
console.log(names("As salam alaikum"));


function addNumbers(sumOne, sumTwo) {
    results = sumOne + sumTwo
    return results
}
let x = 5
let y = 7
console.log(addNumbers(x, y));

let arrResult = []
for (let i = 0; i < 10; i++) {
    let result = addNumbers(i, 2*i)
    arrResult.push(result)
}
console.log(arrResult);

function addNumber(numOne, numTwo) {
    result = numOne + numTwo
    return result    
}
let a = 8
let b = 9

console.log(addNumber(a, b,5,3));

let adjectives = ["Tall","Short","Fat","thin","Intelligent"]
function describe() {
    let d = prompt("Enter your Name")
    let e = Math.floor(Math.random() * adjectives.length)
    console.log("Oh " + adjectives[e]  + " " + d);
}
describe()

let array = ["Beautiful","Ugly","Handsome"]
function name1() {
    let rand = Math.floor(Math.random() * array.length)
    let numb = array[rand]
    let names = prompt("Enter your Name")
    console.log("Oh " + numb  + " " + names);
}
name1()