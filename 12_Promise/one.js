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

/*
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Aniket", password: "123" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>{
    console.log("The promise is either resolved or rejected");
  })
  */

//   const promiseFive = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//           resolve({ username: "Javascript", password: "123" });
//         } else {
//           reject("Error : Js went wrong");
//         }
//       }, 2000)
//   })

/*
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Aniket", email: "aniket@gmail.com" });
    } else {
      reject("Error: User details are not correct");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

*/

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error : ", error);
//   }
// }

// getAllUsers();



fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error))