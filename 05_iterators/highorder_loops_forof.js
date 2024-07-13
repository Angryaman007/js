// for of loops 


// ["", "", ""]
//[{}, {}, {}]


const arr=[1,2,3,4,5]

// for (const iterator of object) {  }

for (const num of arr) {
// console.log(num);

}

const greetings="hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}


// MAPS
const map=new Map()
map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('Fr', "France")
// console.log(map)

for (const [key,value] of map) // ----use square bracket for insteritng key and value ----
    {
    // console.log(key,'::', value)
}

const myObject={
    'game1': "NFS",
    'game2': "Spiderman"
}

for(const [key,value] of object){
    console.log(key, '::', value)}
 