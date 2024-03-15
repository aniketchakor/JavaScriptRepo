
/*
const user = new Object() // singleton object

const user1 = {} // non singleton object

console.log(user);
console.log(user1);
*/

/*
const user = {}

user.id = "123abc";
user.name = "Aniket";
user.isLoggedIn = false
console.log(user);

const user1 = {
    email: "aniket@gmail",
    fullname: {
        userfullname: {
            firstname: "Aniket",
            lastname: "Chakor"
        }
    }
}

console.log(user1.fullname.userfullname);
console.log(user1.fullname?.userfullname); // ? if present next xonditoin then only return

*/

const obj1 = {
    fname: "Aniket",
    lname: "Chakor"
}
const obj2 = {
    email: "aniket@gmail.com"
}

const obj3 = {...obj1, ...obj2}
console.log(obj3);
//or

const obj4 = Object.assign(obj1, obj2)

console.log(obj4);

//or

const obj5 = Object.assign({}, obj1, obj2) // {} - to merge more than two objects (consider as target object)

console.log(obj5);

// or getting values from database

const user2 = [
    {
        id: 1,
        email: "ani@gmail.com"
    },
    {
        id: 2,
        email: "cha@gmail.com"
    },
    {
        id: 3,
        email: "anvay@gmail.com"
    },
]

console.log(user2[1].email);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1)); // key value in array format

console.log(user2.hasOwnProperty('isLoggedIn'));
