const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) //  Array in array , array as single element
// console.log(marvel_heros);


// const allHeros=   marvel_heros.concat(dc_heros)
// console.log(allHeros);


//   SPREAD OPERATOR

// const all_new_Heros= [...marvel_heros,...dc_heros]
// console.log(all_new_Heros);


const another_array = [1,2,3,[4,5,6],7,[11,12,12]]
const realAnotherArray = another_array.flat(Infinity) // spread out the array

console.log(realAnotherArray);


console.log(Array.isArray  ("Hitesh")); // false

console.log(Array.from("Hitesh"));