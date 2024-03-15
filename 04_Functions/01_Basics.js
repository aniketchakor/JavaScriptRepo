// Functions

// 1. 

// function SayHello(){
//     console.log("H");
//     console.log("E");
//     console.log("L");
//     console.log("L");
//     console.log("O");
// }
// SayHello();

/*
function addTwoNumbers(num1, num2){ // parameters
    //console.log(num1 + num2);
    return num1 + num2 
}

//console.log(addTwoNumbers(8, 5)); // arguments

const result = addTwoNumbers(4, 9);

console.log("result : ", result);
*/

/*
function addTwoNumbers(num1, num2){ 

    let result = num1 + num2
    return result 
    console.log("Aniket"); // after return keyword we can not execute anything after return keyword
}


const result = addTwoNumbers(4, 9);

console.log("result : ", result);
*/

/*
function loginMessage(username){
    return `${username} just logged in`
}

console.log(loginMessage("Aniket"));

function loginMessage(username){
    return `${username} just logged in`
}

console.log(loginMessage(""));

function loginMessage(username){
    return `${username} just logged in`
}

console.log(loginMessage()); // undefined


*/

/*
function loginMessage(username){
    if(username === undefined){
            console.log("Please enter a username");
        

    }
    return `${username} just logged in`
}

console.log(loginMessage());


function loginMessage(username){
    if(username === undefined){
            console.log("Please enter a username");
            return

    }
    return `${username} just logged in`
}

console.log(loginMessage());

*/

/*
function loginMessage(username){
    if(!username){
            console.log("Please enter a username");
            return

    }
    return `${username} just logged in`
}

console.log(loginMessage());

// defualt values
function loginMessage(username = "Rahul"){
    if(!username){
            console.log("Please enter a username");
            return

    }
    return `${username} just logged in`
}

console.log(loginMessage());
*/