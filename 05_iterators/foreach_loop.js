//--------foreach loop----------//

/*

array.forEach(element => {
    
});

*/

const coding=["js", "ruby", "cpp", "java","paython", "html"]

//----callback fuction-----//
// coding.forEach(function green(val){
//     console.log(val)
// }) 

//----arrowfuction----//
// coding.forEach((item)=> {console.log(item)})  

//----printMe----//
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index , arr)
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"paython",
        languageFileName:"py"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName)
     
})
