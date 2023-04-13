let arrColors = ['Blue','white','yellow','green','gray','white','yellow','gray','green']
arrColors.push('purple','magenta','violet')
arrColors.shift()
console.log(arrColors)
console.log(typeof arrColors)

let arrColorsold =  ['Blue','white','yellow','green','gray']
arrColorsold.splice(3,1,'black','red')
console.log(arrColorsold)

let arrColorsnew =  ['Blue','white','yellow','green','gray']
arrColorsnew.pop()
arrColorsnew.unshift('lilac','cream','magenta')
console.log(arrColorsnew)



let findElement = arrColors.find(function(e){
    return e === 'pink'
})
console.log(findElement)

let findElement2 = arrColors.find(e => e === 'green')
console.log(findElement2)

let findElement3 = arrColors.lastIndexOf('white')
console.log(findElement3)

let arrNumbers = [3,8,9,7,2,4,5,3]
arrNumbers.sort()
console.log(arrNumbers)

let names = ['Sodiq','Abdullateef','Habeeb','Sekinat','Aishat','Latifat']
names.sort()
console.log(names.reverse())

let foods = ['milk','bread','butter']
foods.push('banana','eggs')
foods.shift()
console.log(foods[3] )
foods.sort()
console.log(foods)

let foods1 = foods.indexOf('milk')
console.log(foods1)
foods.splice(1,1,'carrot','lettuce')
console.log(foods)

let drinks = ['juice','pop','pop']
let drinks1 = drinks.lastIndexOf('pop')
console.log(drinks1)

let course = ["Engineering","Lawyers","Doctors","pharmacy"]
console.log(course.includes("Engineering"))
console.log(course.join(""))
console.log(course.slice(1,2))
console.log(course.toString())
console.log(course.sort())
course.forEach(course => console.log(course))
let longwords = course.filter(course => course.length > 7)
console.log(longwords)

const number6 = [1,2,3,4,5,6,23,29]
const double = number6.map(x => x * 2)
console.log(double)
const  found = number6.find(e => e > 10)
console.log(found)