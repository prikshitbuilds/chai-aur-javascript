// This Refers to current context

const user ={
    username:"hitesh",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to wesite`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// user.welcomeMessage()
console.log(this); // Empty Obj
// In Node env , this refers to empty object
// in browser window is the global obj



function chai(){
    let username ="bawa"
    console.log(this.username); // Undefined
}
chai()

// This works in objects not in function




const chaii = ()=>{
let name ="bawa"
console.log(this.name); // Undefined
// this -> empty obj

}
chaii()


const addTwoo = (n1,n2)=>{
return n1 +n2
}
// Implicit return no need to write return
// {} -> return likhna pdta
// ( )-> no need to write return


console.log(addTwoo(1,2));


const addObj = ()=> ({username:"bawa"})