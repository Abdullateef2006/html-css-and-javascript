let arr = []
for (let i = 0; i < 10; i++) {
    arr.push(i + 1)

}
console.log(arr)
for (let j = 0; j < arr.length; j++) {
    arr[j]
}
console.log(arr)
for (let arrs of arr) {
    console.log(arrs)
}

let friend = {
    name: "Sodiq",
    complexion: "Dark",
    school: "Saint Saviors High school"
}

for (let person in friend) {
    console.log(`${person} = ${friend[person]}`);
}


let friends = ["name", "complexion", "school"]

for (let persons of friends) {
    console.log(persons);
}

for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i === 5) {
        break
    }
}

let cars = [{
    make: "Toyota",
    name: "sienna",
    color: "red",
    year: 2017
},
{
    make: "benz",
    name: "4matic",
    color: "blue",
    year: 2018
},
{
    make: "Volvo",
    name: "Pijo",
    color: "red",
    year: 2019
},
{
    make: "honda",
    name: "accord",
    color: "red",
    year: 2020
}

]

for(let car of cars){
    if(car.color !== "red"){
        continue
    }
    if(car.year >= 2019){
        console.log("This is another car" , car);
    }
}



// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2019 || cars[i].color === "red") {
//         console.log("A new car is found,", cars[i])
//         break
//     }

// }