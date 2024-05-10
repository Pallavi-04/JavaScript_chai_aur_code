const myNums = [1, 2, 3, 4, 5]

let initVal = 0;
const myTotal = myNums.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, initVal );
// console.log(myTotal);

const tot = myNums.reduce( (acc, curr) => acc+curr, 0 )
// console.log(tot);

const shoppingCart = [
    {
        item: "JS course",
        price: 299
    },
    {
        item: "Python course",
        price: 2999
    },
    {
        item: "JC++S course",
        price: 499
    },
    {
        item: "MobileDev course",
        price: 6000
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);