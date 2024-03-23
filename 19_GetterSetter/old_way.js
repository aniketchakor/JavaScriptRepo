
// function behaviour is function and object both

// 1. Function based syntax+++++++++++++++

/*
function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const Obj = new User("chakor@gmail.com", "chai")

console.log(Obj.email);

*/
//2. Object based syntax++++++++++++++++++

const User = {
    _email: 'utkarsha@gmail.com',
    _password: '123212',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
// Object.create called factory function+++

const Emp = Object.create(User)

console.log(Emp.email);
console.log(Emp.password);