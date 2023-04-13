function factorial(params) {
    let var1 = params * factorial(--params)  
    if (params < 2) {
        return 1
    } else {
        let mul = []
        mul.push(params + " *" + --params + " *" + --params + " *" + --params + " *" + --params + " *" + --params ) 
        console.log(mul);
    } 
    return var1

}
console.log(factorial(7));