let names = ['Sodiq','Abdullateef','Habeeb','Sekinat','Aishat','Latifat']
let row = 1
let newNames = []
for (let i = 0; i < row; i++) {
    let cols = 5
    for (let j = 0; j < cols; j++) {
        newNames.push(names[j])
        
    }
    console.table(newNames)
    
}
