/*
const user = {
    username: "Aniket",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} welcome to our course`); // this referese to current context

        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Rahul"
// user.welcomeMessage()

console.log(this); // in node environment global this referese to empty but in browser we can see global object as window
*/

/*
function fun(){
    console.log(this); // but if we call this inside function body then we can get multiple values in node environment
}
fun()


function fun1(){
    const username = "aniket"
    console.log(this.username) // this is used only in object not in function it gives undefined error
}
fun1()

const fun2 = function(){
    const username = "aniket"
    console.log(this.username) // this is used only in object not in function it gives undefined error same error it gives like above
}
fun2()
*/

/*
const fun3 = () =>{
    let username = "Aniket"
    console.log(this.username); // undefined
    console.log(this);  //undefined
    // this is not accessible in function and arrow function it only access for object values
}

fun3();

*/

// +++++++++++Arrow function+++++++++++

/*
const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(8, 9));

// Implicit return
const addThree = (num1, num2) => num1 + num2 // single line statement if curly braces used for condition then return keyword must be used but if parenthesis used then no need to return keyword use
console.log(addThree(8, 4));


// return object

const addfour = (num1, num2) => ({username: "Aniket"})

console.log(addfour(3, 5));

const myArr = [2, 5, 3, 9, 6]

myArr.forEach(function(){})
myArr.forEach(() => {})
myArr.forEach(() => ())
*/
