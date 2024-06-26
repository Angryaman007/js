// array


/*


const myArr=[0,1,2,3,4,5,"aman", "sana" ,"love", true]


*/


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["spiderman", "superman"] 

const myArr2=new Array(1,2,3,4)
// console.log(myArr[0]);

// Array Methods

myArr.push(9)//use to store elment in arr//
myArr.push(6)
myArr.push(7)

/*
output
[
    0, 1, 2, 3, 4,
    5, 9, 6, 7
  ]

    */
myArr.pop()// use to remove last elment from arr
myArr.unshift(11)// use to insert elment at first positon of elment which is led to change in the position of all arr elment

myArr.shift()//remove first elment in the arr

// console.log(myArr.includes(3))
// console.log(myArr.includes(11))
// console.log(myArr.indexOf(5))

// const newArr=myArr.join()
// console.log(myArr)
// console.log( typeof newArr)


//slice, splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log("c",myArr)
console.log(myn2)








