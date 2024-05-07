const balance = 500;
console.log(typeof balance);    // number

const num = new Number("300");  
console.log(typeof num);        // object

const number = new Number(300);
// console.log(typeof number);     // object

console.log(typeof number.toString());

console.log(number.toFixed(2));
console.log(number.toPrecision(2));

console.log(number.toString().repeat(3));

console.log(number.toString().valueOf());

const hundreds = 100000000;
console.log(hundreds.toLocaleString());     // commas lag jayega
console.log(hundreds.toLocaleString('en-IN')); 

// const otherNum = 23.8966;
const otherNum = 123.8966;
console.log(otherNum.toPrecision(3));

//------------------------ MATHS -----------------------
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.66));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.2));

// console.log(Math.max(2, 8, 6, 1));
// console.log(Math.min(2, 8, 6, 1));

// console.log(Math.random()); // gives value b/w 0 & 1
// console.log(Math.random() * 10);    // b/w 0 to 10
// console.log(Math.floor(Math.random() * 10) + 1);    // +1 to keep b/w 1 & 10

const min = 10;
const max = 20;

// +min to have value > 10 i.e., min
console.log(Math.floor(Math.random() * (max-min+1)) + min);