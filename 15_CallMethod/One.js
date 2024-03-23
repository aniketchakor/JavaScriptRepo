function SetUserName(username){
    // Complex DB Calls
    this.username = username;
   
}

function createUser(username, email, password){

    SetUserName.call(this, username)
    this.email = email
    this.password = password
}


const Obj = new createUser("Aniket", "aniket@gmail.com", "123")

console.log(Obj);