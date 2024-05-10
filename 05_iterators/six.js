// const coding = ["js", "ruby", "java", "cpp", "swift", "php", "python"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);    // returns undefined

// ***** for-each doesn't return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )   // returns values based on given condition

// **** call-back me scope open kar liya toh return statement lagana padega
// const newNums = myNums.filter( (num) => {       // Have to use return keyword
//     return num > 4
// } )   


// Another way of doing the above ------>
// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (book) => book.genre === 'History' )

userBooks = books.filter( (book) => {   // scope open -- retur required
    return book.edition >= 2000 && book.genre === 'History';
} )
console.log(userBooks);