// array.find() is used to search for an element in the array that matches a specific condition.


// the function and syntax of find() is very much like the 
// array.filter method, except it only returns a single element. 

// use find when you want a single element returned.
// array.find() returns undefined if nothing is found. 

//! use the filter instead of find when you need multiple elements returned.

// EXAMPLE: 
const trees = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];

const result = trees.find(tree => tree.name === "birch");
console.log(result); // {name: 'birch', count: 4}