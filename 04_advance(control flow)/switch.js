/*

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

//const month=3
const month="april"

switch (month) {
     //case 1:
        case "january":
        console.log("january");
        break;
    //case 2:
        case "feb":
        console.log("feb");
        break;
    //case 3:
        case "march":
        console.log("march");
        break; 

        // we use break to control the further excution of code if there is no break(//break) then all the code will excute till there is break (march april ) but default value will  not //

    //case 4:
        case "april":
        console.log("april");
        break;
    //case 5:
        case "may":
        console.log("may");
        break;

    default:
        console.log("default case match")
        break;
}