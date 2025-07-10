
// Function defintion
function sayMyName(){
    console.log("Prikshit");
}


// sayMyName -> Function Reference
sayMyName() // func execution 

function addTwoNumbers(Number1,Number2) // parameter
{
 console.log(Number1+ Number2);
}

addTwoNumbers(1,2) // arguments


function addThreeNumbers(n1,n2,n3){
 return n1+n2+n3
}

const ans = addThreeNumbers(1,2,3)
console.log(ans);



function loginUserMessage(username){
    return `${username} just loggedIn`
}

const message = loginUserMessage("Prikshit")
console.log(message);


