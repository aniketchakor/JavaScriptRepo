// JS main behaviour is prototypal (eg. new, classes,  this, inheritance) - Prototype
// 

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2
// multiplyBy5(4);

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const Obj1 = new createUser("Aniket", 80)
const Obj2 = new createUser("Utkarsha", 90)

// console.log(Obj1);
// console.log(Obj2);

 Obj1.increment()
Obj2.printMe()