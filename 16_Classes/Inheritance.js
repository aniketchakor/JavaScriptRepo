class User{
    constructor(username){
        this.username = username
    }
  logMe(){
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const newCourse = new Teacher("Aniket", "aniket@gmail.com", "2345");

newCourse.addCourse()
newCourse.logMe()
const courses = new User("Utkarsha")

courses.logMe()

console.log(newCourse === courses);
console.log(newCourse instanceof User);
console.log(courses instanceof User);
console.log(newCourse instanceof Teacher);
console.log(courses instanceof Teacher);