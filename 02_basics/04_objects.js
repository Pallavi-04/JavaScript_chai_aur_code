// SINGLETON OBJECT 
const tinderUser = new Object();
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        username: {
            firstName: "Aditi",
            lastName: "Dev"
        }
    }
}

// console.log(regularUser.fullName.username.firstName);

// OPTIONAL Chaining ? if does not exist
// used when response comes from API
// console.log(regularUser.fullName?.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}   // will nest two objects in the object

Object.assign(obj1, obj2)  // Here target will be obj1
// console.log(obj1);
const obj4 = Object.assign({}, obj1, obj2)  // {} empty object is treated as target, rest are source
// console.log(obj4);

// -------- using spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// array of objects from API
const users = [     
    {
        id: 1,
        username: "abc"
    },
    {
        id: 2,
        username: "def"
    },
    {
        id: 3,
        username: "ghi"
    }
]

// console.log(users);
// console.log(users[0]);

// console.log(tinderUser);
// ***1) returns array of keys of object in parameter
console.log(Object.keys(tinderUser));

// ***2) returns array of Values of object in parameter
console.log(Object.values(tinderUser));

// ***3) returns array of key-value pairs 
console.log(Object.entries(tinderUser));
// Har ek key-value ko array banata

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks if the property exists in the object
