/**
 * Two ways to declare objects : 
 *  1) like Literal     -- not singleton
 *  2) like Constructor  is singleton -- Object.create()
 */


const mySym = Symbol("key1");

// Object literals  // empty object - {}
const JsUser = {
    name: "Pallavi",     // key by default is treated as string
    "full name": "Pallavi Shukla",
    [mySym]: "mykey1",   // Symbol key should be under []
    age: 23,
    location: "Jabalpur",
    email: "abc@123.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}   

// [Symbol(key1)]: 'mykey1'

 // Accessing objects by dot operator -- not required to access as string
// console.log(JsUser.age);
 
// Accessing objects by square brackets -- key should be enclosed within ""
// console.log(JsUser["email"]);
//  --- keys having space cannot be accessed by dot
// console.log(JsUser["full name"]);

// console.log(typeof JsUser.mySym);   // it is string not actually symbol 
// console.log(JsUser[mySym]);  

JsUser.email = "zxy@123.com"

// Object.freeze(JsUser)    
// Prevents the modification of existing property attributes and values,
// and prevents the addition of new properties.
JsUser.age = 24
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hellow JS User");
}
JsUser.greetingTo = function() {
    console.log(`Hellow ${this.name}`);     // this refers object ke andar ki properties
}
console.log(JsUser.greeting);   // [Function (anonymous)]
console.log(JsUser.greeting());
// console.log(JsUser.greetingTo());

JsUser.greetingTo() // only calling