const myObj = {
    'js': "JavaScript",
    'cpp': "C++",
    'rb': "RubyOnRails"
}

for (const key in myObj) {
    // console.log(key);       // prints key
    // console.log(myObj[key]);    // prints value
    console.log(key, ' : ', myObj[key]);
}

const programming = ["JS", "C++", "Ruby", "Swift"]

for (const key in programming) {
    // prints keys of array unlike the key-value pair in for-of loop
    // console.log(key); 
    console.log(programming[key]);  // value at key == array-items gets printed
}

// Array ki keys by default number hi oti starting from 0
// Hence, objects were designed for any type of keys

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// MAP is NOT ITERABLE
// for (const key in map) {
//     console.log(key);       // Nothing gets printed 
// }
