
let x = new Date(2022, 2, 25)
console.log(x)
let a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let day = x.getDate()
let month = x.getMonth()
let year = x.getFullYear()
let myDate = a[month - 1]
console.log(day + " : " + myDate + " : " + year);

