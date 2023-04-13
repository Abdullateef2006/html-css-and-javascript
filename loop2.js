let names = ['Sodiq','Abdullateef','Habeeb','Sekinat','Aishat','Latifat']
for (let i = 0; i < names.length; i++) {
    console.table(`My friends names are ${names[i]}`)
    
}

let myTable = []
let row = 1
let column = ['Sodiq','Abdullateef','Habeeb','Sekinat','Aishat','Latifat']


for (let k = 0; k < row; k++) {
    // let template = []
    for (let l = 0; l < column.length; l++) {
        column[l] = "As salam alaykum " + column[l]
        myTable.push(column[l])
    }
   
}
console.table(myTable)




let myTable1 = []
let row1 = 1
let column1 = ['Sodiq','Abdullateef','Habeeb','Sekinat','Aishat','Latifat']
let m = 0
while (m < row1) {
    let cols = 5
    let n = 0
    while (n < cols) {
        column1[n] = "As salam alaykum " + column1[n]
        myTable.push(column1[n]) 
        n++
    }
    m++
    console.table(myTable1)
}
 