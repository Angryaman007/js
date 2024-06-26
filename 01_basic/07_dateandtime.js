// Dates

let myDate=new Date()

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(typeof myDate)


// let myCreatedDate=new Date(2024,2,24)

// let myCreatedDate=new Date(2024,2,24,19 , 4, 34)
let myCreatedDate=new Date("06-26-2024")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
newDate.toLocaleString('default',{
    weekday:"long",


})









