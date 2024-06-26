// singleton

// object literals

// Object.create 

const mysym = Symbol("key1");
const jsUser = {
    name: "Amandeep",
    "full name": "Amandeep Singh",
    [mysym]: "mykeys1",
    age: 22,
    location: "delhi",
    email: "pks95990@gmail.com",
    isLoggedIn: false,
    lastLoginDAys: ["monday", "saturday"]
}

//  console.log(jsUser.email)
//  console.log(jsUser["email"])
//  console.log(jsUser["full name"])
// console.log(jsUser[mysym])

 jsUser.email = "aman@gamil.com"
// Object.freeze(jsUser)
 jsUser.email = "amanx97788@gmail.com"
 // console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");

}
jsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this["full name"]}`);  
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








