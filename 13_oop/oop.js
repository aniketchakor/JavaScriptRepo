
/*
const user = {
    username : "Aniket",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from  database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}




console.log(this);
console.log(user.username);
console.log(user.getUserDetails());
*/

// to avoid multiple creation of user we used constructor

//Constructor function
// new keyword also a constructor function

// const promiseOne = new Promise();
// const date = new Date();
// console.log(date);


function User(username, loginCount, isLoggedIn){
    this.username =  username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this // implicitely return no need to return this but we are doing it here to understand

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

/*
const userOne = User("Aniket", 4, true)
// console.log(userOne);

const userTwo = User("Javascript", 6, false)
console.log(userOne); // oerride previous values with userTwo to avoid this we used new keyword and constructor function is used for 
                      // creting new instance
                      // constructor function with new keyword gives new instance every time\
// console.log(userTwo);

*/

/*
const userOne = new User("Aniket", 4, true)
const userTwo = new User("Javascript", 6, false)
console.log(userOne); 
console.log(userTwo); 
*/


// new keyword ----  1.create new empty object
//                   2. called to constructor
//                   3.  inject all  list of data  using this keyword


const userOne = new User("Aniket", 4, true)
const userTwo = new User("Javascript", 6, false)
console.log(userOne.constructor); 
console.log(userTwo);