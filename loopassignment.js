let grid = []
let nCells = 64
let counter = 0
var row 
for (let i = 0; i < nCells + 1; i++) {
    if (counter % 8 == 0) {
        if (row != undefined) {
            grid.push(row)
        }
        
        row = []
    };
    counter++
    let count = counter
    row.push(count)
}
console.table(grid)
