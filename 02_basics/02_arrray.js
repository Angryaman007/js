const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros=["superman","flash", "batman"]


//  marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros=[...marvel_heros, ...dc_heros] // spread operator \\
// console.log(all_new_heros)


const another_Array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_Array.flat(Infinity)// used for mkaing into an single arry here in flat(    ) we give the depth of the arry for exmaple in above arry depth is 4 or we can write the infinity which can defien the depth 

console.log(real_another_array)


console.log(Array.isArray("aman"))
console.log(Array.from("amandeep"))// make an array from above array

console.log(Array.from({name:"amandeep"}))  //  interesting // no array formed as keys , elments has to differ
/*
otput
[](empty array)

*/
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


