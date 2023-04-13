let shopList = []
shopList.push('milk', 'bread', 'apples')
shopList.splice(1, 1, 'banana', 'eggs')
console.log(shopList)
console.log(shopList.pop());
shopList.sort()
shopList.find(e => e === 'milk')
shopList.splice(2, 0, 'carrots', 'lettuce')


let drinks = ['juice', 'pop']
console.log(shopList)
let arrConcat = shopList.concat(drinks, drinks)
console.log(arrConcat)
console.log(arrConcat.lastIndexOf('pop'))