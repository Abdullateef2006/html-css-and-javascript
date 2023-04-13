class car {
    constructor(color, make, year, forSale) {
        this.color = color
        this.make = make
        this.year = year
        this.forSale = forSale
    }
}
let myCar = new car("Red","Toyota",2019,true);
console.log(myCar.color,myCar.make,myCar.year,myCar.forSale);


class person {
    #firstName
    #LastName
    constructor(firstName,LastName){
        this.#firstName = firstName
        this.#LastName = LastName
    }
    get firstName(){
        return this.#firstName
    }
    set firstName(firstName){
        return this.#firstName = firstName
    }
    get LastName(){
        return this.#LastName
    }
    set LastName(LastName){
        return this.#LastName = LastName
    }
    taslim(){
        console.log("Assalam Alaykum " , this.firstName,  this.LastName);
    }
    felicitation(name, lName, object){
        return "This is a wonderful " + object + ", " + name + " " + lName
    }
    fullName(){
        return this.firstName + " " + this.LastName
    }
   
}

person.prototype.introduce = function(){
    console.log("Hello ", this.firstName);
}
person.prototype.myColor = "Red"

let p1 = new person("Abdullateef","Jimoh")
let p2 = new person("Oke","Habeeb")
let p3 = new person("Sodiq","Ojugbele")
p1.introduce()
console.log(p1.myColor);
p1.firstName = "Jimoh"
console.log(p1.fullName()); 
console.log(p2.fullName()); 
console.log(p3.fullName()); 
console.log("As Salam Alaykum " + p1.firstName,p1.LastName);
console.log("As Salam Alaykum " + p2.firstName,p2.LastName);
console.log("As Salam Alaykum " + p3.firstName,p3.LastName);
p1.taslim()
p2.taslim()
let x = p3.felicitation(p3.firstName, p3.LastName, "Toyota Sienna",)
console.log(x);

class vehicle {
    constructor(color,currentSpeed,maxSpeed){
        this.color = color
        this.currentSpeed = currentSpeed
        this.maxSpeed = maxSpeed
    }
    moveBy(){
        console.log("Moving at ", this.currentSpeed);
    }
    accelerate(Amount){
        this.currentSpeed += Amount
    }
}
class motorCycle extends vehicle {
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed)
        this.fuel = fuel
    }
}
let motor = new motorCycle("Black", 0, 250, "Gasoline")

console.log(motor.color);
motor.accelerate(50)
motor.moveBy(1)


// class Animal {
//     constructor(dog,cow,goat){
//         this.dog = dog
//         this.cow = cow
//         this.goat = goat
//     }
//     dogSound(){
//         console.log("A dog" , this.dog);
//     }
//     cowSound(){
//         console.log("A cow" , this.cow);
//     }
//     goatSound(){
//         console.log("A goat" , this.goat);
//     }   
// }
// Animal.prototype.specie = "Crows"
// let animalSound = new Animal("Barks","Moos","Bleats");
// console.log("A cow " + animalSound.specie);
// animalSound.dogSound()
// animalSound.cowSound()
// animalSound.goatSound()

class workers {
    constructor(firstName,lastName,nYears){
        this.firstName = firstName
        this.lastName = lastName
        this.nYears = nYears
    }

}
workers.prototype.work = function () {
    return this.firstName + "" + " " + this.lastName + " have worked in this company for " + this.nYears
}
let info = new workers("Wale","Akorede","5yrs");
let info1 = new workers("Usman","Kunle","7yrs");
let info2 = new workers("Abdullateef","Jimoh","4yrs");
console.log(info.work());
console.log(info1.work());
console.log(info2.work());
let arr = [info,info1,info2]

for (const name of arr) {
    console.log( name);
}

class price {
    #rice
    #juice
    constructor(rice,juice){
        this.#rice = rice
        this.#juice = juice
    }
   
    cost(){
        let a = Number(prompt("Enter a number"))
        // if (a === 1) {
        //     return this.#rice +  this.#juice
        // } else if (a === 2){
        //     return (this.#rice +  this.#juice) * 2
        // } else {
        //     return "You can not order more than two times"
        // }
        switch (a) {
            case 1:
                return this.#rice +  this.#juice
                break;
            case 2:
                return (this.#rice +  this.#juice) * 2
                break;
            case 3:
                return (this.#rice +  this.#juice) * 3
                break;
            case 4:
                return (this.#rice +  this.#juice) * 4
                break;
            case 5:
                return (this.#rice +  this.#juice) * 5
                break;
            default:
                return "You can not order more than five times"
        }
         
    }
    get rice(){
        return this.#rice
    }
    get juice(){
        return this.#juice
    }
}
let amount = new price(500,700);
let amount1 = new price(2000,2500);
console.log(amount.cost());
console.log(amount1.cost());
console.log("The amount of a plate of rice is " + amount.rice,"while the amount of a glass of  juice is " + amount.juice);
console.log("The amount of a plate of rice is " + amount1.rice,"while the amount of a glass of juice is " + amount1.juice);

class Animal {
    constructor(specie,sound){
        this.specie = specie
        this.sound = sound
    }
    makeSound() {
        console.log(this.sound);
    }
}
Animal.prototype.walk = function () {
    return this.specie + " can Walk"
}
let obj1 = new Animal("Dog","Bark");
obj1.makeSound()
console.log(obj1.walk());
console.log(obj1);