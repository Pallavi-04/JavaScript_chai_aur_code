function addTwoNum(number1, number2) {
    console.log("Hii JS");
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
    return number1 + number2;
    // console.log(Hello Ji);   UNREACHABLE CODE
}

// addTwoNum(2, 4);
// const result = addTwoNum(3, 4);
const result = addTwoNumbers(3, 4);
// console.log(result);            

function loginUserMessage(username = "Sam") {
    // if(username === undefined) {
    // if(!username) {
    if(undefined) {
        console.log("Please enter a username.");
        return;
    }
    return `${username} just logged in.`;
}


// console.log(loginUserMessage("Pallavi"));
// console.log(loginUserMessage());

// ... rest/spread operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(900, 1800, 2700, 3600, 4500));
// console.log(val1);

const user = {
    username: "Pallavi",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 1000]));