// for loop +++++++++++++++++++++++++++++++++++++++

/*
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    if(element ==5){
        console.log("5 is the best number")
    }
}


for(let i = 0; i <=  10; i++){
    console.log(`outer loop value : ${i}`);
    for (let j = 0; j <=10; j++ ){
        console.log(`Inner loopvalue ${j} and inner loop${i}`);
  }
}

for(let i = 1; i <=  10; i++){
    console.log(`outer loop value : ${i}`);
    for (let j = 1; j <=10; j++ ){
        console.log(i + '*' + j + ' = ' + i * j);
  }
}

let myArr = ["Spiderman", "Batman", "Ironman"]
for(let i = 0; i <=  myArr.length; i++){
  const element = myArr[i]
  console.log(element);
}

let myArr = ["Spiderman", "Batman", "Ironman"]
for(let i = 0; i <=  myArr.length; i++){
  const element = myArr[i]
  console.log(element);
}
*/

// break and continue +++++++++++++++++++++++++++++

/*
for (let index = 0; index <=20; index++) {
    if (index == 5) {
         console.log(`Detected 5`);
         break; // to break any control flow on required condition
    }
   console.log(`value of i is ${index}`);
    
}


for (let index = 0; index <=20; index++) {
    if (index == 5) {
         console.log(`Detected 5`);
         continue; // wait for  asked condition and remove  it from output
    }
   console.log(`value of i is ${index}`);
    
}

*/

// while loop  +++++++++++++++++++++++++++++++++


/*
let index = 0

while (index <= 10) {
    console.log(`value of index is ${index}`);
    index += 2 
}

let myArr = ["Spiderman", "Batman", "Ironman"]

let arr = 0
while (arr < myArr.length) {
    console.log(`value is ${myArr[arr]}`)
    arr += 1 
} 
*/

// do while loop ++++++++++++++++++++++++++++++++

/*
let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <=10);

let heroes = ["superman", "Ironman", "shaktiman"]

let index = 0;
do {
    console.log(`My heroes are ${heroes[index]}`);
    index++
} while (index < heroes.length);

let marks = 11

do {
    console.log(`Marks getting in exam is ${marks}`);
    marks++
} while (marks<=10);

*/

// for of loop ++++++++++++++++++++++++++

/*
const  arr = [1, 2,3,4, 5]

for (const item of arr) {
    console.log(item);
}

const grretings = "Hello world"

for (const greet of grretings) {
    console.log(`Each char is ${greet}`);
}

*/


// Maps ++++++++++++++++++
 /// no duplicates value conttain... only unique values printed

 /*
const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")
map.set('UK', "United Kingdom") // ignore in output because duplication
console.log(map);


for(const key in map){
    console.log(key)
}
// objects are not iterable so we can not get output

for (const [key, value] of map) {
    console.log(key, ":-", value);
}


const Obj = {
    name: "Aniket",
    email: "aniket@gmail.com",
    age: 31
}

for (const [key] of Obj) {
    console.log(key);
} //object are not itetrable  with this method

*/

/*
//For in loop  {used for object}
const myCourse = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swifft by apple"
}

for(const key in myCourse){
    // console.log(key);
    console.log(`${key} shortcut is for ${myCourse[key]}`);
}


const  programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    console.log(key);
    console.log(programming[key]);
}

// if for in loopused for arrays then it prints index values
*/

// Array   ---- For of loop
// Objects   ---- For in Loop


// For each loop +++++++++++++++++++++

// also called higher order function ----------

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((item)=>{
    console.log(item);
})

// we can also pass callback as separate fufnction in foreach

function printme(item){
    console.log(item);
}

coding.forEach(printme)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})
/*
IMP : - 
main difference between map and forEach is that "map returns a new array"
with the results of the function, 
while "forEach" does not return anything and only "modifies the original array".
*/


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName} : ${item.languageFile}`);
})