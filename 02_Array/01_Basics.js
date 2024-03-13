//array

const myArr = [0,3,2,1,5,7];

const newArr = new Array(4,3,2,5)

console.log(myArr[3]);
console.log(newArr[3]);
const myHeros = ["Shaktiman", "Aryamann", "Joker"]

// Array Method

myArr.push(6) // push to array and modify original array
myArr.push(9)
console.log(myArr);

myArr.pop() // remove last element
console.log(myArr);

myArr.unshift(10) // insert element at start of array
console.log(myArr);



myArr.shift() // remove first elemnt from start element
console.log(myArr);

console.log(myArr.includes(4));
console.log(typeof myArr.includes(4));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(7));

const newArr1 = myArr.join()

console.log(myArr);
console.log(typeof newArr1);


// slice

console.log("A", myArr);

const myNum1 = myArr.slice(1, 4) // start from first index upto last index -1

console.log(myNum1);

console.log("B", myArr);

const myNum2 = myArr.splice(1, 4) // start from first index upto last index 

console.log(myNum2);

console.log("C", myArr); 

// diff bet slice and splice is 
