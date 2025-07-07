// singleton -> constructor -> apni tarah ek hota

// literal se singelton ni hota

const mySym = Symbol("key1")

// Object literal
const JsUser = {
name :"Prikshit", // by default name string ki tarah store hota
age:18,
"full name":" Prikshit Sharma",
location:"JAIPUR",
[mySym]:"mykey1",
email:"hitesh@google.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);// not only one way
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

// accessing symbol
console.log(JsUser[mySym]);

// cant have chamges
// Object.freeze(JsUser) 


JsUser.greeting = function (){
    console.log("Hello JS USER");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS USER ${this["full name"]}`);
}

console.log(JsUser.greetingTwo());
