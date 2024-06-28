
// function sayMyname(){
//     console.log("A")
//     console.log("M")
//     console.log("A")
//     console.log("N")
//     console.log("D")
//     console.log("E")
//     console.log("E")
//     console.log("P")
// }


// sayMyname()


// function addTwoNumbers(number1,number2){
//  console.log(number1+number2)
// }

// addTwoNumbers(3,5)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)

function addTwoNumbers(number1,number2){

// let result=number1 +number2
// return result
return number1+number2

    }
     
const result= addTwoNumbers(3,5)

// console.log("result: ", result)


function loginUserMessage(username="sana"){

    if(username === undefined){
// console.log("please enter a username ")
return
// we can also use if(!usernam) insted of if(username===undefined) here " ! " mean "=== undefined"
    }

    return `${username} just logged In `

}

// console.log(loginUserMessage("amandeep"))
// console.log(loginUserMessage())

function calucalateCartPrice(val1,val2,val3,...num1){
// val1,val2,val3 takes the intial 3 vlaues in the array and "..." is rest and spread operator is used to add multiple items in the array 


return num1
}

// console.log(calucalateCartPrice(200,300,400,500,600,700,800))


const foodItems={
    username1:"allu",
    price:40
    ,
username2:"gobi",
price:60,

username3:"masroom",
price:80,

}

function handleFoodItems(anyitems){
    console.log(`fooditem is ${anyitems.username} and price is ${anyitems.price}`)

}

// handleFoodItems(foodItems)

handleFoodItems({
    username:"tamatar",
    price: 50

})


//arrays passing


const myNewArray=[20,40,60,69,76]
function returnSecondValue(getArray){
return getArray[2]

}

// console.log(returnSecondValue(myNewArray))

//or

console.log(returnSecondValue([200,4500,5656,]))





