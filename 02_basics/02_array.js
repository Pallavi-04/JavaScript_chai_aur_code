const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes);  // nested array
// console.log(marvel_heroes); 

// ------------- ADDING ONE ARRAY'S ITEMS TO ANOTHER ----------------

// 1) Concat()
    // const all_heroes = marvel_heroes.concat(dc_heroes) 
    // console.log(all_heroes);    


// 2) SPREAD Operator ------
    const all_new_heroes = [...marvel_heroes, ...dc_heroes]
    // console.log(all_new_heroes);



// -------- Spreading the nested array elements in a single array ----------
const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [8, 9]]]

//  3)  using flat(d)  d = depth of nesting in array
const real_array = another_array.flat(Infinity)
// console.log(real_array);

//  4) Array.isArray(x)  checks whether x is an array
// console.log(Array.isArray("Pallavi")); 

//  5)  Array.from(x)   Creates an array from an iterable object x.
// console.log(Array.from("Pallavi"));

console.log(Array.from({name: "Pallavi"}));  // *** Interesting


// 6) Creating array from different items using Array.of(x, y, z)
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
