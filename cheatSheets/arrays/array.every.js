// use array.every() when you need to check if all elements in the array pass the test.

const everyArray = [1, 2, 3, 4, 5];

function isEven(element) {
    return element % 2 === 0;
}

console.log(everyArray.every(isEven)); // false
