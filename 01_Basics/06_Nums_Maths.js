/*
**************Numeber****************
const score = 400;
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(typeof balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 34.3212
console.log(otherNum.toPrecision(3))

const num1 = 1000000

console.log(num1.toLocaleString('en-UK'))

*/

/*
*****************Maths***********************
*/

console.log(Math) // Object

console.log(Math.floor(Math.PI))

console.log(Math.PI.toFixed(2))
console.log(Math.abs(-4))

console.log(Math.round(4.6))

console.log(Math.ceil(4.3))
console.log(Math.floor(4.9))

console.log(Math.sqrt(49))
console.log(Math.min(4,2,6,3))
console.log(Math.max(21,54,32,11,23))

console.log(Math.floor((Math.random() * 10) + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);