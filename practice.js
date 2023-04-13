let myCar = {
    make : "Toyota",
    model : "sienna",
    color : "yellow",
    forSale : null
}

let colorChange = "color"
myCar[colorChange] = "red"
console.log(myCar[colorChange])

let forSale2 = "forSale"
myCar[forSale2] = false
myCar[forSale2] = true
console.log(myCar['make'], myCar['model'], myCar['color'], myCar['forSale']) 

let company = {
    compName : "Olasam Royal Link limited",
    Operation : ["monogramming",'printing','logistics'],
    Addresses : [{
        street : "Oghoanina Drive",
        Number : 12,
        code : 100270,
        LGA : 'Alimosho',
        state : "Lagos State"      
    },
    {
    street : "salami street",
    Number : 12,
    code : 100300,
    LGA : 'Gwagwalada',
    state : "Abuja "      
    }],
    founded : 1999,
}
console.log(company)


// let codeChange = company.Address["code"] = 100280
// console.log(codeChange)
// console.log(company)

// let codeChange1 = "code"
// company.Address[codeChange1] = 100290
// console.log(company.Address[codeChange1])
// console.log(company)

console.log(company.Operation[0])
console.log(company.Addresses[0].street)
