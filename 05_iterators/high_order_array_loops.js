// specially for array or Objects

// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4]

// for (const iterator of object) {
    
// }

// Here, object means the item over which you want to iterate
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// ******* Maps *************
/**
 * They store the data in the order of their insertion.
 * Only contain Unique Values.
 */
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
   console.log(key);        // Entire key-value pair gets printed
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    console.log(key);       // prints key
    console.log(value);     // prints value
}

const myObj = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

// NOT ITERABLE
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }


