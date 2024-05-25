const name="aman"
const repoCount= 4

//console.log(name+ repoCount + "value");

//console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName= new String('amans-shh')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('m'))
const newString=gameName.substring(0,5)
console.log(newString)

const anoterString=gameName.slice(-8, 5)
console.log(anoterString);

const newStringone= "  aman  "
console.log(newStringone);
console.log(newStringone.trim());


const url="https://aman.com/aman%30singh"
console.log(url.replace('%20', '-'))
//console.log(url.includes('aman'))
console.log(url.includes('deep'))

console.log(gameName.split('-'))



