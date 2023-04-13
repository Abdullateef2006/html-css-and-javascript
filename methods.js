let x = "Assalam"
console.log(x.concat(" AbdulRazak")
    .toUpperCase()
    .replace(" THERE", " you")
    .concat(" Masha Allah")
);


let y = 7
console.log(Number.isNaN());

// let uri = "https//www.example.com/submit?name=Abdullateef"
// let encoded_Uri = encodeURI(uri)
// console.log("encoded", encoded_Uri);

// let decoded_Uri = decodeURI(encoded_Uri)
// console.log("decoded", decoded_Uri );

let uri = "https//www.example.com/submit?name=Abdullateef"
let encoded_Uri = encodeURIComponent(uri)
console.log("encoded", encoded_Uri);

let decoded_Uri = decodeURIComponent(encoded_Uri)
console.log("decoded", decoded_Uri );

let uri1 = "how's%20it%20going%3f"
let encoded_Uri1 = encodeURIComponent(uri1)
console.log("Decode" , encoded_Uri1);

let decoded_Uri1 = decodeURIComponent(uri1)
console.log("Decode" , decoded_Uri1);

let Uri2 = "How's it going?"
let encoded_Uri2 = encodeURIComponent(Uri2)
console.log("encode" , encoded_Uri2);

let decoded_Uri2 = decodeURIComponent(Uri2)
console.log("decode" , decoded_Uri2);

let website = "https//www.basescript.com?=Hello world'"
let encoded_website = encodeURIComponent(website)
console.log("Encode", encoded_website);

let str_int  = "10"
let int_int = parseInt(str_int)
console.log("type of " , int_int, " is", typeof int_int);

let int_str = "10"
let int_int1 = parseFloat(int_str)
console.log("type of " , int_int1, " is", typeof int_int1);

let arr = ["Banana", 10, "Taslim", 9.56,true]
function showElement(element,index) {
    console.log( "Printing Element ", element ," On array position" , index );
}
arr.forEach(showElement)

let array = ["Abdullateef",16,"Sodiq",new Date(),true]
let array2 = ["Abdullateef","Aishat","Sodiq","Latifat","Sekinat"]
function check(element,index) {
    return typeof element === "string"
}
let j = array.filter(check)
console.log(j);
console.log(array2.every(check));

function checks(elements,indexs) {
    return typeof elements === "number"
    
}
let i = array.filter(check)
console.log(i);
console.log(array.every(check));


function checks(a,b) {
    return typeof a === "boolean"
}
let k = array.filter(checks)
console.log(k);
console.log(array.every(checks));

let array1 = ["Abdullateef",16,"Sodiq",new Date(),true]
console.log(array1.copyWithin(0,3,4));
console.log(array1.copyWithin(0,3,5));

let number = [10,20,30,40,50]
let mapArr = number.map(x => x % 7)
console.log(mapArr);

let names = ["Abdullateef","Sodiq","Aishat","Sodiq","Latifat","Sodiq"]
console.log(names.lastIndexOf("Sodiq"));



for (let i = 0; i < arr.length; i++) {
    console.log( "Printing Element " + arr[i] + " On array position " + i );
}


