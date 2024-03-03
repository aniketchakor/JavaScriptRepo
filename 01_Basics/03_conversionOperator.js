// let score = "33"
// let score = 33
// let score = null
// let score = undefined
// let score = true  
// let score = false 
// let score = "Aniket"

/*
console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score)

console.log(typeof valueInNumber) // Number
console.log(valueInNumber) // NaN but type is number
*/


// "33" => 33
// "33abc" => NaN => type Number
// true => 1; false => 0;

// let isLoggedIn = 1 
// let isLoggedIn = ""
// let isLoggedIn = "Aniket"
// let isLoggedIn = 0

/*
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

*/

// 1 => true; 0 => false
// "" => false
// "aniket" => true


/*
let someNumber = 33

let stringNumber = String(someNumber)

console.log(typeof stringNumber)
*/


// *************Operations************

let value =3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%2)

/*
let str1 = "Hello"
let str2 = " Aniket"
let str4 = str1 + str2;
console.log(str4)
*/

/*
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log((3 + 4) * 5 % 3)
console.log(+true)
console.log(+"")
*/

/*
let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // not to use like this
*/


/*
let gameCounter = 100
// gameCounter++;
 ++gameCounter;
console.log(gameCounter)
*/


// prefix and postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
