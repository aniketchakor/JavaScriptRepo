/*
let a = 300

if(true){
    console.log(a); // access from outside inside function scope
}
*/

/*
function one(){
    const username = "Aniket"
    function two(){
        const email = "Aniket@gmail.com"
        console.log(username) // from inside scope we can access global values also
    }
    // two();
    console.log(email); // from outside we can not access child function scope values
    two();
}

one();

*/
// closures : - at the time of nested function then child functions can access values from parent function

/*
if(true){
    const username ="Aniket"
    if(username === "Aniket"){
        const email = "aniket@gmail.com"
        console.log(username + " " +  email);
    }
    // console.log(email)
}

// console.log(username);
*/

// ++++++++++++++IMP+++++++++

/*
function addValue(num){
 return num + 1
}

console.log(addValue(5));

const addTwo = function(num){ // function expression to store in variable values
    return num + 2
}
console.log(addTwo(7));
*/

/*
console.log(addValue(5)); // functions we can get values before decalration  called Hoisting

function addValue(num){
    return num + 1
   }
   
   console.log(addTwo(7)); // when function stored in variable then we can not access  called Hoisting
   
   const addTwo = function(num){ 
       return num + 2
   }
  
   */

   