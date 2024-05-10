const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.map( (num) => num + 10 )
// const newNums = myNum.map( (num) => {num + 10} )    // undefined
// scope open kar rhe toh return karna hai

const newNums = myNum
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )

// filter mein true or false 
// map me implicit/explicit return or operation perform hota

console.log(newNums);
