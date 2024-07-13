const myNumbers=[1,2,3,4,5,6,7,8,9,10,11,12]

// const newNums=myNumbers.map((num)=> num+12)


/*
jab bhi scope '{}'
kholo return kro alwasys for exmple:
//---const newNums=myNumbers.map((num)=> {return num+12})----//
varna single line me likho to kholne ki jarurat nahi exmple: upper dekho line 3 mein 
*/
// console.log(newNums)

//----chaining methond----// 
// jab do teen method ek sath use kr sakte ho jaise map and filter etc

const newNums=myNumbers
                       .map((num)=> num*10)
                       .map((num)=> num+1)
                       .filter((num)=>{return   num>=40})
console.log(newNums)                       

