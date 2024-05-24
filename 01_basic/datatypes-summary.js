/*


Datatypes are mainly of two types and are divided on basis on how they are stored in memory and how they are acces.

Primitive    and     Nonprimitive      

#Primitive

--Seven types : strng , number, boolean , null, undefined, symbol, BifInt


Example:
-----
*/
const score=100
const scorevalue=100.2
const isLoggedIn=false
const outsidTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId)
const bigNumber=23456n

/*
#Reference (Non Primitve)

--Array, objects, functions

Example:
----
*/

/*
const heros={"shaktiman", "naagraj", "doga"};
let myObj={
    name: "Aman",
    age: 22,
}

const myFuction =function(){
    console.log("hello world");

}
console.log(typeof anotherId)

*/
//https://262.ecma-international.org/5.1/#sec-11.4.3

//----------------------------//

//--- Stack(Primitive), Heap(Non Primitve)

let myYouTUbename="Amandeep singh rajput"
let anotherName=myYouTUbename
anotherName="aman singh kstriye" 

console.log(myYouTUbename);

console.log(anotherName);



let userOne={
emailId:"anbdsgmail.com",
Upi:"78978698678"

}

let userTwo=userOne
userTwo.emailId="aman@deep.com"

console.log(userOne.emailId)
console.log(userTwo.emailId)
