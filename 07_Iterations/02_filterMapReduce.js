/*
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item)=>{
    console.log(item);
    //return item 
    // foreach never return a value
})

console.log(values);
*/


/*

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((item)=> item > 5)

const newNums = myNums.filter((item)=> {
      return item > 5  // if we startr scope {} then to returnvalues return keyword need to write 
})
console.log(newNums);

// filter returns the values

// if with foreach we want to return values

const myNums1 = []

myNums1.forEach((item)=>{
    if(item >5){
        myNums1.push(item)
    }
})

console.log(myNums1);



// example for filter +++++++++++++++++++++++


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// 1.
  const userBooks = books.filter((item)=>{
        if(item.genre == "History"){
            console.log(item);
        }
  })

  //or
  
//   2.
  const userBooks1 = books.filter((bk)=> bk.genre === "History")
  console.log(userBooks1);

//   3.
  const userBooks2 = books.filter((bk)=> {return bk.publish >= 2000})
  console.log(userBooks2);

  // 4.
  books.forEach((item)=>{
       if(item.publish > 2000){
        console.log(item);
       }
  })

//   5.

const userBooks3 = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks3);



*/

/*
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums1 = myNums.forEach((num)=> num + 10);
console.log(newNums1);

const newNums2 = myNums.forEach((num)=> console.log(num + 10));
*/

// Chaining ++++++++++++++++++++++++++
/*
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums
                 .map((num)=>num * 10)
                 .map((num)=> num + 1)
                 .filter((num)=> num > 50)
                //  .forEach((num)=> console.log(num / 5))
                 console.log(newNums);

                 */


// Reduce method +++++++++++++++++


const newNums = [1,2,3,4,5,6,7,8,9,10]
const initialvalue = 3;

const sum = newNums.reduce((acc, currVal)=> {
    console.log(`${acc} and ${currVal}`);
    return acc + currVal
 },initialvalue)

console.log(sum);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
