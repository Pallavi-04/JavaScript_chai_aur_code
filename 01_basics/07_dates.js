const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());  // Sat May 04 2024
// console.log(myDate.toJSON());        // 2024-05-04T07:37:38.644Z
// console.log(myDate.toLocaleString());   // 5/4/2024, 7:38:00 AM
// console.log(myDate.toLocaleDateString());  // 5/4/2024

console.log(myDate.getMonth());
// console.log("getDate " + myDate.getDate());      
// console.log("getDay " + myDate.getDay());
// console.log("getFullYear " + myDate.getFullYear());
// console.log(myDate.getHours());
// console.log("getTime " + myDate.getTime());
// console.log("getUTCDate " + myDate.getUTCDate());

// console.log(myDate.setDate(14));    // change the date
// console.log(myDate.toLocaleString());

// let theDate = new Date(2024, 0, 1);
// let theDate = new Date(2024, 0, 1, 5, 3);
// let theDate = new Date("2024-11-04");
let theDate = new Date("04-11-2024");
console.log(theDate.toLocaleString());

theDate.toLocaleString('default', {
    weekday: "long"
})


let myTimeStamp = Date.now();
console.log(myTimeStamp);       // in millisec
console.log(Math.floor(Date.now() / 1000));
