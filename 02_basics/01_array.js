const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);

// console.log(myArr);
myArr.push(6)


myArr.push(7)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);  // push from start

myArr.shift()           // pop from start
// console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(typeof newArr);

// --------------- slice,,, splice ----------------------
const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);

// The slice() function creates a duplicate of a specified section of an array in a new array object.  
// The original array is not modified.
// The slice() method creates shallow copies, not deep copies. 
// It copies object references into a new array instead of entire objects.

// The SPLICE() --- The splice() function modifies an array by deleting, replacing, or inserting entries at a specified index.
// Returns an array containing the deleted elements. If only elements are added, it returns an empty array.

// https://www.simplilearn.com/javascript-slice-vs-splice-article