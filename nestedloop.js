let arrofArrays = []
for (let i = 0; i < 3; i++) {
   arrofArrays.push([])
   for (let j = 0; j < 5; j++) {
    arrofArrays[i].push(j)
    }
}
console.table(arrofArrays)

let myTable = []
let row = 5
let column = 7
let counter = 0
for (let k = 0; k < row; k++) {
    let template = []
    for (let l = 0; l < column; l++) {
        counter++
        template.push(counter)
    }
    myTable.push(template)
}
console.table(myTable)


let table = []
let counter1 = 0
for (let o = 0; o < 3; o++) {
    table.push([])
    for (let p = 0; p < 7; p++) {
        table[o].push(counter1) 
        counter1++ 
    }
}
console.table(table);


