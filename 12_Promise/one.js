/*
const promiseOne = new Promise(function(resolve, reject){
//Do an async task
//DB calls,cryptography, newtwork  


setTimeout(() => {
    console.log('Async task is complete');
    resolve()
}, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
*/

/*

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task two");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
}).catch(function(){
    console.log("error captured");
})
*/

/*
const promiseThree = new Promise(function(resolve, reject){
   
    setTimeout(() => {
        console.log("Async task 3 ");
        resolve({username: "Aniket", email: "aniket@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})
*/
