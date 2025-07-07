// Date

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate); // Object



let myCreatedDate = new Date(2025,0,31)
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleDateString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:'long'
})




