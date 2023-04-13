let arrayName = ["Abdullateef","Sodiq","Aishat","Latifat","Habeeb","Sekinat","AbdulQudus","Faruk","Isiak"]
let demo = document.getElementById("FirstId")
function build() {
    let tables = document.getElementById("html")
    let rows = document.getElementsByTagName("td")
    for (let i = 0; i < arrayName.length; i++) {
        rows.item(i).innerText = arrayName[i] 

    }
}
build()
let att = document.createAttribute("data-row")

function getData(x) {
    // let message = document.querySelector("Html")
    // let text = message.getAttribute("id")
    // let txt = "As salam Alaikum"
    // document.getElementById("Message").innerText = txt
    let text = "Assalam Alaikum"
    
}