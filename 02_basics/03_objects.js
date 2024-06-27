// const tinderUser = new Object()

const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "rajtilak"
tinderUser.isLoggedIn = false



// console.log(tinderUser)

const regularUser = {
    email:"abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aman",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1={1: "a", 2:"b"}
const obj2={3: "c", 4:"d"}
const obj3={5: "e", 6:"f"}



// const obj3={obj1,obj2}

// const obj4=Object.assign({},obj1,obj2, obj3)
const obj4={...obj1,...obj2,...obj3}

// console.log(obj4)

 const users=[
{
     id:1,
     email:"pksks0787@gmail.com"  
},
{
    id:2,
    email:"ks0787@gmail.com"  
}, 
{
    id:3,
    email:"s0787@gmail.com"  
},
]

 

users[2].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))

//....... very importent can be used everywhere in the java script this segments(above and below)..........\\
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'));








