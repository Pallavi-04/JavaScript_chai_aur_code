/**
 *   'this' --- refers to the CURRENT context
 */

const user = {
    username: "pallavi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website.`);
        console.log(this);      // current context
    }

}
user.welcomeMessage();
// user.username = "sam"        // ----  context change 
// user.welcomeMessage()

// console.log(this);  // empty object {}
/**
 * 1). Inside node env., 'this' refers to the empty object,
 * because there is no context in the global.
 * 
 * 2). Inside the browser , 'this' refers to the Window object, the global object.
 */

// _________________ Function DECLARATION _____________
// function chai() {
//     let username = "pallavi";
//     // console.log(this.username);     // undefined
//     console.log(`Function Declaration: \n`);
//     console.log(this);          // Global object
// }
// chai();

/**
 * 3). Inside the Function inside the Node Env : console.log(this); karane pe
 *      Global value, some microtasks, structured clone etc. values milti 
 *      i.e., this conains alot of things which can be accessed and used.
 * 
 * 4). Functions(declaration) k andar 'this' use nii kar sakte jaise Objects ke andar this use kar sakte 
 *      a) 'this' neither works inside Function expression nor Arrow function.
 *      b) 'this' refers to Global Object in Function Expression as well as Function Declaration.
 *      c) 'this' refers to empty object {} in case of Arrow function.
 */


// ____________ Function EXPRESSION _____________
// const chai = function () {
//     let username = "pallavi";
//     // console.log(this.username); // undefined   again 
//     console.log("this inside function expression :  ");      // refers to Global object
//     console.log(this);  // global object
// }


// ___________________ ARROW Function----    () => {}

// const chai = () => {
//     let username = "pallavi";
//     console.log(this.username); // undefined   again 
        // console.log(`Function Expression : \n `);
//     console.log(this);  // {} empty object
// }
// chai();


// _________ BASIC ARROW fun
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// _________ IMPLICIT RETURN ______No need to write return keyword: 1-line statement
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );   // PArantheses instead of curly braces

// To return object, wrap it in parantheses.
const addTwo = (num1, num2) => ({username: "pallavi",
    result: num1 + num2
})
console.log(addTwo(4, 5));

const myArr = [2, 5, 7, 9, 15]

// myArr.forEach(() => {})