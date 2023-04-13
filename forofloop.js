let names = ['Sodiq','Abdullateef','Habeeb','Sekinat','Aishat','Latifat']
// for (let i = 0; i < names.length; i++) 
for(let name of names) {
    console.log(name) 
}

let car = {
    make :[ "Toyota","Volvo","benz","honda"],
    name : "sienna",
    color : "red",
    model : "xle"

}

for(let prop in car){
    console.log(car[prop])
}



