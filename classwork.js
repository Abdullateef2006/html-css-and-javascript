let foods = ["Rice","Beans","Yam"]
let names = [ "Fuhad", "Abdullateef", "Sodiq", "AbdulRazak","Habeeb"]
let output = []
output.push(foods)
output.push(...names)
// output.push(...foods,names)
console.log(output)

let multiplication = (numOne = 3, numTwo = 6) => console.log(numOne * numTwo);
multiplication()
multiplication(4,7)
multiplication(5)

let division = (numthree = 18, numfour = 2) => console.log(numthree / numfour);
division()
division(36, 3)
division(84)

let firstnum = 20
let secondnum = 5
let operator = "*"
function value(a, b, symbol) {
    if (symbol === "*") {
        console.log(a * b);
    } else if  (symbol === "/"){
        console.log(a / b);
    } else{
        console.log(a * b);
    }
}
value(firstnum, secondnum, operator)

let firstNumber = 30
let secondNumber = 6
let operators = "/"
value(firstNumber,secondNumber,operators)

let myTable = []

let number = 12
let minNum = 0
for (let i = 1; i < number + 1; i++) {
    temp = []
    for (let j = 12; j > minNum; j--) {
        let calc = j/ i
        temp.push(calc)
        
    }
    myTable.push(temp) 
}
console.table(myTable)

let table = []
row = 12
column = 12
for (let i = 0; i <= row; i++) {
    let temp = []
    for (let j = 0; j <= column; j++) {
        temp.push(j + i)
    }
    table.push(temp)
}
console.table(table)

let table1 = []
row1 = 12
column1 = 12
for (let i = 0; i <= row1; i++) {
    let temp = []
    for (let j = 0; j <= column1; j++) {
        temp.push(i - j)
    }
    table1.push(temp)
}
console.table(table1)
