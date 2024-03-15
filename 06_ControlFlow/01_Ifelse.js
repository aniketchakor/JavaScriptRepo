// if

/*
const isLoggedIn = true

if(isLoggedIn){
  console.log("Logged In")
}

if(2 == "2"){
    console.log("Executed");
}
if(2 === "2"){
    console.log("Executed again");
}else{
    console.log("Data type missmatch");
}

if(2 !=3){
    console.log("not equal both");
}

const temperature = 41

if(temperature < 50){
    console.log("Less than 50");
}

const score = 80

if(score < 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

const score1 = 80

if(score1 < 100){
    var power1 = "fly"
    console.log(`user power: ${power1}`);
}
console.log(`power is: ${power1}`);

const score2 = 80

if(score2 < 100){
    let power2 = "fly"
    console.log(`user power: ${power2}`);
}
console.log(`power is: ${power2}`);

*/
/*

const balance = 1000;

if(balance > 500) console.log("shorthand notation run successfully")

*/
// balance > 500 ? console.log("shorthand notation run successfully") : console.log("amount doesnot match");

// nesting

const balance = 1000;

if(balance < 500 ){
       console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
} else if(balance <1200){
    console.log("less than 1200");
}else{
    console.log("eqaul to 1000");
}



const userLoggedIn = true
const debitCard = true
const creditCard = false
const otpVerified = false
if(userLoggedIn && debitCard && otpVerified || creditCard ){
    console.log("allowed for shopping");
}else{
    console.log("OTP not verified");
}