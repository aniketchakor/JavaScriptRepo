// Imediately invoked function expression (IIFE) syntax: ()()

/*
function run(){
    console.log('DB Connected');
}
run()
*/

// ==> 

/*
(function play(){
    console.log('DB Connected');
})()

()//function defination 
()//Execution call

*/
// to avoid global scope pollution IIFE is used

/*
(() => {
    console.log('DB Connected two');
})();

(function sing () { // named IIFE
    console.log('DB Connected three');
})()

// if two IIFE used back to back then it gives error if we are not end first IIFE by (;) because it gets confused where to stop the IIFE

*/

((database)=>{ // Unnamed IIFE
    console.log(`DB Connected to ${database}`);
})('My DB') // pass the value to execute in execution call