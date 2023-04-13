let person = {
    fName : "Abdullateef",
    lName : 'Jimoh',
    Age : 16,
    height : 1.64,
    complexion : "Dark",
    isRegistered : true
}
let result1 = person['fName']
let result2 = person.fName
console.log(result1, result2)
console.log(person)
let nameChange1 = person["fName"] = "Saadiq"
let nameChange2 = person.fName = "Saadiq"
console.log(nameChange1, nameChange2)
let Agechange = person["Age"] = 18
let heightchange = person["height"] = 1.72
console.log(Agechange, heightchange)
console.log(person)
let nameChange = "fName"
person[nameChange] = "Habeeb"
console.log(person[nameChange]) 

let Agechange1 = "Age"
person[Agechange1] = 20
console.log(person[Agechange1])
console.log(person)

