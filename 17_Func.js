
// n number of parameetr


// Rest Operator
function calculateCartPrice(...num1){
    return num1
}


// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }

console.log(calculateCartPrice(200,400,500,2000));



// Obj Passing in Function
const user  = {

    username:"Prikshit",
    age:99
}



function handleOjbect(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.age}`);
}

handleOjbect(user)


const newArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArray));