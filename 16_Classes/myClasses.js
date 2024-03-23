// ES6

/*
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const Student = new User("Aniket", "aniket@gmail.com", "4321")

console.log(Student.encryptPassword());
console.log(Student.changeUserName());

*/

/*
// .. behind the screen
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const Student = new User("Aniket", "aniket@gmail.com", "4321")

console.log(Student.encryptPassword());
console.log(Student.changeUserName());

*/


