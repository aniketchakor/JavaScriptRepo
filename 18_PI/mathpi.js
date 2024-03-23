

console.log(Math.PI);

Math.PI = 5
console.log(Math.PI);

// we can change fixed value of PI also
// above we can see after setting pi as 5 still value 
// doesn't changed

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

const newObj = {
    name: "js course",
    price: 1999,
    isAvailable: true,

    newOrder: function(){
        console.log("Error genearate");
    }

}

console.log(newObj);


Object.defineProperty(newObj, "name", {
    // writable: false,
    enumerable: true,    
})

console.log(Object.getOwnPropertyDescriptor(newObj, "name"));

for (let [key, value] of Object.entries(newObj)) {
   if (typeof value !== "function") {
    console.log(`${key}, ${value}`);
   }
   
 
}