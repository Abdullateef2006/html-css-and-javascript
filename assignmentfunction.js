let firstNumber = 7
let secondNumber = 5
let operator = "+"
function value(a,  b, op) {
    if (op === "+") {
        console.log(a + b);
    } else if  (op === "-"){
        console.log(a - b);
    } else{
        console.log(a + b);
    }
    
}
value(firstNumber,  secondNumber, operator)


function addNumbers(numOne = 15, numTwo = 20) {
    let result = numOne + numTwo
    console.log(result);
}
addNumbers()
addNumbers(25, 15)
addNumbers(10)

let addNumber = (param1 = 15, param2 = 20) => console.log(param1 + param2);
addNumber()
addNumber(25, 15)
addNumber(10)
let addNum = [3, 5]
addNumber(...addNum)

let SayTaslim = () => console.log("As salam alaykum")
SayTaslim()


let addNames = ["Faruk", "Isiak", "AbdulQudus"]
let names = [...addNames, "Fuhad", "Abdullateef", "Sodiq", "AbdulRazak","Habeeb", "Aishat", "Latifat", "Sakinah"]
names.forEach(e => console.log(e))
// for(let name of names){
// console.log(name)
// }

let plusNum = [4, 7, 3, 9]
let plusNumbers = (numOne, numTwo, numThree, numFour) => console.log(numOne + numTwo + numThree + numFour)
let plsNum = [2, 8]
let plusnums = [5, 0]
plusNumbers(...plusNum, ...plsNum, ...plusnums)

function sayTaslim(params1,...params2) {
    console.log(params1,params2);
}
sayTaslim("As salam alaykum","Abdullateef","Sodiq")

function sayTeslim(params3,params4) {
    console.log(params3,params4);
}
sayTeslim("As salam alaykum","Abdullateef","Sodiq")

