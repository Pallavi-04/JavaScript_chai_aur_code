var c = 300;
let a = 300
if(true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Pallavi"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);       // undefined
    two();
}
// one();


if(true) {
    const username = "Pallavi"
    if(username === "Pallavi") {
        const website = " youtube"
        // console.log(username + website);    // Pallavi youtube
    }
    // console.log(website);  not defined
}
// console.log(username);      // not defined


// ********************* Interesting *********************

console.log(addOne(5));
// Function Declaration
function addOne(num) {
    return num + 1;
}

addTwo(5);  // Cannot access 'addTwo' before initialization as addTwo() is stored in
// Function Expression
const addTwo = function(num) {
    return num + 2;
}
addTwo(5);