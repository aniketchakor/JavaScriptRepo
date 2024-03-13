const dc_heros = ['superman', 'batman', 'flash']
const marvelHeros = ["thor", "IronMan", "Spiderman"]

/*
marvelHeros.push(dc_heros)
console.log(marvelHeros);
console.log(marvelHeros[3][1]); // not right to merge two arrays

marvelHeros.concat(dc_heros);  // not right to merge two arrays
console.log(marvelHeros);

*/
/*
const AllHeros = marvelHeros.concat(dc_heros)

console.log(AllHeros);

const all = [...marvelHeros, ...dc_heros]
console.log(all);
*/
/*

const newArr = [1,2,3,4, [5,6,7,8], 9, [10,11,12,13]]

const realnewArr = newArr.flat(Infinity)

console.log(realnewArr);
*/


console.log(Array.isArray('Aniket'));

console.log(Array.from('Aniket'));

console.log(Array.from({name: 'Aniket'})); // can't create on object with this situation need to tell for keys and values


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));