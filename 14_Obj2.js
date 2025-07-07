//Constrcutor

//const tinderUser = new Object()
const tinderUser ={

}


tinderUser.id ="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false


const regularUser ={
    email:"some@gmail.com",
    fullname :{
        userFullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname?.userFullname.firstname);

const obj1 ={
    1:"a",
    2:"b"
}

const obj2 ={
    3:"a",
    4:"b"
}

// MERGING ARRAY
// const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)


const obj3 ={...obj1,...obj2}
console.log(obj3);

// values coming from database

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"g@mial.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
// op value datatype is array


