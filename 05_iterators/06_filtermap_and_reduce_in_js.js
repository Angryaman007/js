
// const coding=["js", "ruby", "cpp", "java","paython", "html"]

/*
//-----forEach is not able to return the values-----// 
const values=coding.forEach((item)=>{
    console.log(item)
    return item  
})

console.log(values)
*/


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
//     return num>4} )

//----or----//

/*
const newNums=[]
myNums.forEach((num)=> {
    if(num>4)
    {
        newNums.push(num)
    }
})
console.log(newNums)

*/

const books=[
    {
        title:'book one', genre:'fiction', publish:1981, edition:2004,
    },
    {
        title:'book two', genre:'non-fiction', publish:1988, edition:2008,
    }, {
        title:'book three', genre:'history', publish:1991, edition:2014,
    }, {
        title:'book four ', genre:'science', publish:1971, edition:2004,
    }, {
        title:'book five', genre:'fiction', publish:1999, edition:2010,
    }, {
        title:'book six', genre:'non-fiction', publish:1982, edition:2014,
    }, {
        title:'book seven', genre:'science', publish:1984, edition:2004,
    }, {
        title:'book eight ', genre:'history', publish:1997, edition:2010,
    },
{
    title:'book nine', genre:'fiction', publish:1980, edition:1999,
}, {
    title:'book ten', genre:'non-fiction', publish:1902, edition:2014,
}, {
    title:'book eleven', genre:'hsitory', publish:2001, edition:2004,
},
]

let userBooks=books.filter((bk)=>bk.genre==='history')

 userBooks=books.filter((bk)=> {  return bk.publish >= 1980 && bk.genre==="history" && bk.edition >=2014})

console.log(userBooks)