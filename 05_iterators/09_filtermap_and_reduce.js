//------Reduce------//


/*

const array1 = [1, 2, 3, 4]

const intialValue = 0
const sumWithIntial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, intialValue
)
console.log(sumWithIntial)

*/
 

const myNums=[1,2,3]

/*
const myTotal=myNums.reduce(function (acc,currval)
{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0)

console.log(myTotal)
*/

//----or----//

const myTotal=myNums.reduce((acc,curr)=>acc+curr, 0)

// console.log(myTotal)


const shoopingCart=[

{
    itemName:"js course",
    price: 2999
},{
    itemName:"mobile dev course",
    price: 4999
},{
    itemName:"data science course",
    price: 11999
},{
    itemName:"html css ",
    price: 999
},{
    itemName:"dsa",
    price: 3999
},
]
//----add all the prices using reduce----//
const priceTopay=shoopingCart.reduce((acc, item)=> acc+item.price,0)

console.log(priceTopay)