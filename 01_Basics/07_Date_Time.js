// Dates

// let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myOwnDate = new Date(2024, 0, 12)

// console.log(myOwnDate.toDateString());

// let myOwnDate2 = new Date(2024, 0, 12, 5, 2, 21);

// console.log(myOwnDate2.toLocaleString());

// let myOwnDate3 = new Date("2024-01-19");

// console.log(myOwnDate3.toLocaleString());


// let myTimeStamp = Date.now();

// console.log(myTimeStamp);

// let myOwnDate4 = new Date("2024-01-19");
// console.log(myOwnDate4.getTime()/1000);


// let myDate = new Date()
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getMonth());

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: 'long',
    
})

console.log(newDate);