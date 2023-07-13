// returns index of element in array that satisfies function.
// does NOT mutate original array.
[1, 2, 3, 4, 5].find((num, i) => i === 1); // 2


// checks if at least one element in the array satisfies a provided function.
// does NOT mutate original array.
[1, 2, 3, 4, 5].some((num) => num === 3); // true


// test if all elements in array pass provided condition.
// does NOT mutate original array.
[1, 2, 3, 4, 5].every((num) => num > 1); // false


// checks if array includes a certain element.
// does NOT mutate original array.
[1, 2, 3, 4, 5].includes(3) // true


// returns new array containing results after applying a function.
// does NOT mutate original array.
//! returns NEW array.
[1, 2, 3, 4, 5].map((num) => Math.pow(num, 2)); // [1, 4, 9, 16, 25]


// applies a function against an each element in the array to reduce it to a single value.
//! does NOT mutate original array.
[1, 2, 3, 4, 5].reduce((acc, num) => acc + num); // 15


// Returns new array of elements that filter.
// does NOT mutate original array.
//! returns NEW array.
[1, 2, 3, 4, 5].filter((num) => num % 2); // [1, 3, 5]


// adds one or more elements to end of an array.
//! MUTATES original array.
[1, 2, 3, 4, 5].push(1); // 6 -> [1, 2, 3, 4, 5, 1]


// adds one or more elements to beginning of an array.
//! MUTATES original array.
[1, 2, 3, 4, 5].unshift(0); // 6 -> [0, 1, 2, 3, 4, 5]


// removes last element from the array.
//! MUTATES original array.
[1, 2, 3, 4, 5].pop(); // 5 -> [1, 2, 3, 4]


// removes first element from array.
//! MUTATES original array.
[1, 2, 3, 4, 5].shift(); // 1 -> [2, 3, 4, 5]


// access element at specific index.
// does NOT mutate original array.
[1, 2, 3, 4, 5].at(2); // 3


// returns index of given element if found in array, else returns -1.
// does NOT mutate original array.
[1, 2, 3, 4, 5].indexOf(3) // 2


// executes function for each element in array.
// does NOT mutate original array.
[1, 2, 3, 4, 5].forEach((num) => (num * 2)); //


// fills all or portion of array.
//! MUTATES original array.
[1, 2, 3, 4, 5].fill(10); // [10, 10, 10, 10, 10]


// combines two arrays.
// does NOT mutate original array.
[1, 2, 3, 4, 5].concat([6, 7]); // [1, 2, 3, 4, 5, 6, 7]

// reverses order of elements in array.
//! MUTATES original array.
[1, 2, 3, 4, 5].reverse(); // [5, 4, 3, 2, 1]


// sorts elements in place.
//! MUTATES original array.
[5, 2, 3, 4, 1].sort(); // [1, 2, 3, 4, 5]


// joins all elements of an array into a string.
// does NOT mutate original array.
[1, 2, 3, 4, 5].join('-'); // '1-2-3-4-5'


// flatten a nested array into a single-dimensional array. 
// does NOT mutate original array.
[1, 2, [3, 4], 5].flat(); // [1, 2, 3, 4, 5]


// returns index of element in array that satisfies function.
// does NOT mutate orignal array.
[1, 2, 3, 4, 5].findIndex((num) => num === 2); // 1


// returns string representing array and its elements.
// does NOT mutate original array.
[1, 2, 3, 4, 5].toString(); // '1,2,3,4,5'


// returns shallow copy of array in a new array.
// does NOT mutate original array.
[1, 2, 3, 4, 5].slice(1, 3); // [2, 3]


// change the content of the array by removing, replacing, or adding elements. 
//! MUTATES original array.
[1, 2, 3, 4, 5].splice(1, 3, 5); // [2, 3, 4]


Array.isArray("[1, 2, 3]"); // false


Array.from("123"); // ['1', '2', '3']