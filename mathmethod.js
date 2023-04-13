// let x = 2
// console.log(isNaN(x));
// console.log(!isNaN(x));
// console.log(isFinite(x));

// let str = "5"
// console.log(isNaN(str));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10/0));
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

// let newX = x.toFixed(2)
// console.log(newX);
// newX = x.toPrecision(2)
// console.log(newX);

// let highest = Math.max(2,58,100,1000,10,1001)
// console.log(highest);
// highest = Math.min(2,58,100,1000,10,1001)
// console.log(highest);
// let a = Math.max("5",10,"7","11")
// console.log(a);

// let b = Math.sqrt(81)
// console.log(b);

// let c = Math.pow(9,3)
// console.log(c);

// let d = Math.round(34.20642)
// console.log(d);

// let y  = 5.4
// console.log(Math.ceil(-x));
// console.log(Math.ceil(-y));

// console.log(Math.floor(-x));
// console.log(Math.floor(-y));
let x = 2
let y = Math.exp(x)
console.log(y);

let z = Math.log(y)
console.log(z);

let d = new Date()
console.log("day of the week",d.getDay());
console.log("Day of the month",d.getDate());
console.log("Month",d.getMonth());
console.log("year",d.getFullYear());

console.log("seconds ",d.getSeconds());
console.log("Milliseconds",d.getMilliseconds());
console.log("time",d.getTime());
console.log(d.setDate(12));
console.log(d.setHours(48));
console.log(d.setTime(1670846062664));

let today = Date.parse("dec 12 2022")
console.log(today.toLocaleDateString());
let g = new Date(2022, 12, 12, 12, 10, 15, 100)
console.log(g);
console.log(d);

let now =  Date.now()
// let g = new
console.log(now);

let milliDate = new Date(1000)
console.log(milliDate);