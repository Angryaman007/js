const user={
    username: "aman",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to webite`)// "this" is used to refer current constext
        console.log(`${this.price},price only `)


    }
}
// user.welcomeMessage()
// user.username="sana"
// user.price="1000"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//    console.log(this)

// }

// chai()

// const chai=function()
// {
//     let username="aman"
//     console.log(this.username)

// }


const chai=()=>
{
    let username="aman"
    console.log(this)

}

// chai()

// const addT=(num1,num2)=>{
// return num1 + num2
// ######+++++++++++###########
// const addT=(num1,num2)=>
//  num1 + num2


// const addTwo=(num1,num2)=>(num1 +num2)
const addTwo=(num1,num2)=>{username:"aman"
}
console.log(addTwo(3,4))


const myArray=[2,5,3,7,8]

// myArray.forEachfunction()