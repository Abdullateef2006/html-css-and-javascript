let varaible = function (a) {
    console.log(a);
}
varaible(26)

function variable1(b) {
    console.log(b);
}
variable1(17)

function funcOne(number) {
    console.log(number);
    if (number > 0) {
        funcOne(number - 1)
    }
    

}
funcOne(Number(prompt("Enter a number")))



let funcOne = () => {console.log("One")}
let funcTwo = () => {console.log("Two")}
let funcThree = () => {
    console.log("Three")
    funcOne()
    funcTwo()
}
let funcFour = () => {
    console.log("Four")
    setTimeout(funcOne, 1000)
    funcThree()
}
funcFour()




