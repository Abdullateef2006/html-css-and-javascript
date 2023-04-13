let i = 1
while (i < 50) {
    i++
    if((i - 1) % 2 === 0){
        continue
    }
    console.log(i - 1)
}

    
for (let i = 1; i < 50; i += 2) {
    console.log(i);
}

let val1 = ""
let nSkip = 4
for (let j = 0; j <= 10; j++) {
    if(j === nSkip){
        continue
    }
    // val1 += j
    val1 = val1 + "" +  " " + j
}
console.log(val1)

