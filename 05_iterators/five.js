const coding = ["js", "ruby", "java", "cpp", "swift", "php", "python"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// Arrow fun
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe) // Only Reference is given not executed


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "JavaScript",
        extension: "js"
    },
    {
        languageName: "C++",
        extension: "cpp"
    },
    {
        languageName: "Java",
        extension: "java"
    },
    {
        languageName: "Python",
        extension: "py"
    }
]

// here each item is an object
myCoding.forEach( (item) => {
    console.log(item.languageName, ' : ', item.extension);
} )