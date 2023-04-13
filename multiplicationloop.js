let table = []
row = 12
column = 12
for (let i = 0; i <= row; i++) {
    let temp = []
    for (let j = 0; j <= column; j++) {
        temp.push(j * i)
    }
    table.push(temp)
}
console.table(table)







