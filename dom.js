let a = document.querySelector(".main")
let paragraph = document.getElementById("demo")
let id1 = document.getElementById("Div1")
let element = document.body.childNodes[1]
console.dir(element)
let nextElement = element.nextSibling
console.dir(nextElement)

let p = document.body.children.demo.innerHTML = "<li> Good Morning </li>"
console.dir(p)

paragraph.innerText = " Good Morning "
// document.body.children.demo.st = "red"
paragraph.style.color = "red"
console.log(id1);