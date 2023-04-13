let foods = []
foods.push('Milk','Bread','Butter')
foods.splice(1,1,'Bananas','Eggs')
console.log(foods)
console.log(foods.pop())
foods.sort()
foods.find(e => e === 'Milk')
foods.indexOf('milk')
foods.splice(2,0, 'Carrot','Lettuce')


let drinks = ['juice', 'pop']
console.log(foods)
let arrConcat = foods.concat(drinks, drinks)
console.log(arrConcat)
console.log(arrConcat.lastIndexOf('pop'))

