// if
const isUserLoggedIn = true
const temperature = 41

if (temperature < 50) {
    console.log("less than 50");
}
else {
    console.log("temperature > 50");
}

console.log("Execute");
// < > <= >= == != === !==

const balance = 1000
// if (balance > 500) console.log("test");

// __________ Immature , unreadable code
if (balance > 500) console.log("test"), 
console.log("test2"),   console.log("test3");


const useLoggedIn = true
const debitCard = true

if(useLoggedIn && debitCard) {
    console.log("Allow to shop");
}
const emailLogin = true
const googleLogin = false
if(emailLogin || googleLogin) {
    console.log("Logged in");
}

