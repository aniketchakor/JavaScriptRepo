//# Primitive Data Types

//7 types  String, Number, Boolean, Null, undefined, symbol, BigInt

/*
const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const temp = null
let usrEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 121234345556467578n;

console.log(typeof bigNumber)
*/
/********
   JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
**////


// Non-Primitive / reference type

// Arrays, Objects, Date, Function

const heros = ['aniket', 'rahul', 'Mauli']

console.log(typeof heros)

let myObj = {
    name : "ANiket",
    age: 31
}
console.log(typeof myObj)

const myFunc = function(){
    console.log("Hello Aniket")
}
myFunc()

console.log(typeof myFunc)

