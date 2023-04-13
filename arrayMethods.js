// let duplicate = ["Ridwan", "Abdullateef", "Sodiq", "Abdullateef", "Fuhad", "Abdullateef", "Sodiq", "Ridwan", "Fuhad"]
// let original = duplicate.filter((value,index,array) => { 
//     console.log(value,index,array.indexOf(value)) 
//     return array.indexOf(value) === index
// })
// console.log(original);


// let fullName = "Abdullateef Jimoh"
// let fullname = fullName.split(" ")
// console.log(fullname);
// console.log(fullname.length);

// let Name = "Ridwan, Abdullateef, Sodiq, Abdullateef, Fuhad, Abdullateef, Sodiq, Ridwan, Fuhad"
// let newName = Name.split(",")
// console.log(newName);

// let x = "La ilaha illa Allah"
// let newName1 = x.indexOf("la")
// console.log(newName1);
// console.log(x.search("la"));
// console.log(x.lastIndexOf("la"));
// console.log(x.charAt(5));
// console.log(x.slice(0,5));

// let myName = "My name is Abdullateef"
// let fullNam = "MY NAME IS ABDULLATEEF JIMOH"
// let a = fullNam.replace("Abdullateef", "Sodiq")
// // a.replace(myName, fullNames)
// console.log(a);
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.to);


let fullNames = "MY NAME IS ABDULLATEEF JIMOH"
let fixedCaps = fullNames.toLowerCase()
let firstCapital = fixedCaps.charAt(0).toUpperCase().concat(fixedCaps.slice(1))
let firstName = fixedCaps.charAt(11).toUpperCase().concat(fixedCaps.slice(12))
let lastName = fixedCaps.charAt(23).toUpperCase().concat(fixedCaps.slice(24))
console.log(firstCapital.slice(0,10) + " " + firstName.slice(0,11)  + " " + lastName);



let var1 = "I was born in Isheri Olofin, Lagos"
function names(param) {
    let a = param.toLowerCase()
    
    let array = []
    let b =  a.split(" ")
    console.log(b);
    // b.forEach(x => {
    //     let temp = x.slice(0,1).toUpperCase() + x.slice(1)
    //     array.push(temp)
    // })
    for (let index = 0; index < b.length; index++) {
        let d = b[index].slice(0,1).toUpperCase()
        let e = b[index].slice(1)
        var f = d.concat(e).slice()
        array.push(f)
        console.log(f); 
    }
    console.log(array)
    let g =  array.join(" ")
    console.log(g);
}
names("I am a boy")


let d = var1.toLowerCase()
let vowel = ["a","e","i","o","u"]
for (let i = 0; i < d.length; i++) {
    // console.log(vowel[i]);
    d = d.replaceAll(vowel[i], i)
   
}
console.log(d);

// var1 = var1.toLowerCase()
// let vowels = ["a","e","i","o","u"]
// vowels.forEach((letter,index) => {
//     console.log(letter);
//     var1 = var1.replaceAll(letter,index)
// })
// console.log(var1);



