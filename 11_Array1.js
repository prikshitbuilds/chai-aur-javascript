//Array
//  Resizable array
// 

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

//Array creates shallow copy
// shallow copy of an obj is a copy whose properties share the same refrences 

// deep copy -> dont share the same refrence point

const myHeros = ["shaktiman","nagraaj"]

const myArr2 = new Array(1,2,3,4)

// Array Methods

myArr.push(6)
console.log(myArr);
myArr.push(7)
myArr.pop()
console.log(myArr);


myArr.unshift(9) // add infront

myArr.shift() // remove from infront
console.log(myArr);


console.log(myArr.includes(9)); // false

console.log(myArr.indexOf(9)); // -1 dont exist

const newArr = myArr.join() // bind and convert into string
console.log( typeof newArr);
console.log(myArr);

// slice and splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) // last wala include ni
console.log(myn1);
console.log("B ", myArr);



const myn2 = myArr.splice(1,3)
console.log(myArr2);
console.log(myn2);


