// eg. if we don't want to give password 
// want to give as safe and security to it then we used it
// getter setter method

// setters cannot do return -----
// but in getter always return a value with return ---
class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        //  return this._password.toUpperCase()
     return `${this._password}aniket`
    }
    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
}

const Obj = new User("Aniket@gmail.com", "54309abc")

console.log(Obj.password);
console.log(Obj.email);