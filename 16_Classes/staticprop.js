class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const Emp = new User("Aniket")

// console.log(Emp.createId())

class Teacher extends User{
constructor(username, email){
    super(username)
    this.email = email
}
}

const stu = new Teacher("Student", "stu@gmail.com")

console.log(stu);

stu.logMe()

console.log(stu.createId());