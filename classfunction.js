// let numbers = (x, y) => {
//     results = x + y
//     return results
// }

let array = []
for (let i = 0; i < 10; i++) {
    let result = numbers(i*5, i*i)
    array.push(result)
}
console.log(array);



function numbers(numOne, numtwo) {
    results = numOne + numtwo
    return results
}

function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr)
    }
}
getRecursive(5)

function logRecursive(nr) {
    console.log("Started function", nr);
    if (nr > 0) {
        logRecursive(nr - 1)
    } else {
        console.log("Done with Recursion");
    }
    console.log("Ended function", nr);
}
logRecursive(Number(prompt("enter a number")))

function factorial(params) {
    if (params === 0) {
        return 1
    } else {
        return params * factorial(--params) 
    }  
}
console.log(factorial(7));


// let number = 6
// for (let i = 1; i <= number; i++) {
//     factorial1 = number * i
    
// }
// console.log(factorial1);

function fact(param) {
    let result = 1
    let myCollection = []
    if (param > 1) {
        for (let i = 1; i <= param; i++) {
            result = result * i
            myCollection.push(result)
            console.log(result);
            console.log(myCollection);            
        }
    } else {
        console.log("Param is not a positive value");
    }
}
fact(Number(prompt("Enter a number")))

// function names(params) {
//     console.log(params);
//     if (params > 0) {
//         names(params - 1)
//     } else {
//         console.log("The value is Zero");
//     }
//     console.log(params);
// }
// names(Number(prompt("Enter a number")))











 