const fruits = ['Banana', 'Orange', 'Apple']

fruits.push('Lemons') //adds item to the end
fruits.push({newFruit: '🍎'})
fruits.shift() //removes the first item
fruits.unshift({pet: '🐠'})

// console.log('Should get Orange', fruits[1])
// console.log('this length',fruits.length)
// console.log(fruits)

const shoppingList = ['shampoo', 'milk', 'soap', '🥓', '🍣']
// console.log('This is my shopping list --->', shoppingList)


const newShoppingList = shoppingList.concat(fruits)
// console.log('new Shopping list here' , newShoppingList.sort())
// console.log(newShoppingList.reverse())
// console.log(newShoppingList.toString())

const cars = [{ford: 'truck'}, 'audi', 'bmw', 'vw', 'nissan', 'mazda', 'honda', 'hyundai', 'bus']
console.log(cars.toString())
// console.log(cars.join('== * =='))
cars.push(['honda','toyota', 'mitsubishi'])
console.log(cars)