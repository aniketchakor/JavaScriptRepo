// let myName  = "Aniket   "

// console.log(myName.length);
// console.log(myName.trim().length);


// console.log(myName.trueLength); // how can we do this. by creating method trueLength

/*
const heroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.aniket = function(){
    console.log(`Aniket is present in all  object`);
}

Array.prototype.heyAniket = function(){
    console.log(`Aniket says hello`);
}

heroes.aniket()
heroes.heyAniket()
heroPower.heyAniket()
// heroPower.aniket()


//INHERITANCE

const User = {
    name: "Aniket",
    email : "aniket@gmail.com"

}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignemnt: "js Assignment",
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

*/

let anotherUserName = "Aniket Chakor     "

String.prototype.trueLength = function(){
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is:  ${this.trim().length}`);
}

anotherUserName.trueLength()

"ANiket".trueLength()
"Utkarsha".trueLength()