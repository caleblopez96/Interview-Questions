// Key:
//! = Question
//* = Answer
//? = Explanation




//! Question: What is the data type of all variables in Javascript?

//* Answer: All Javascript variables are of the object data type.

//? Everything in Javascript is an object.




//! Question: What are the different data types in Javascript? 

//* Answer: Javascript has several data types that can be divided into two categories: primitve and non-primitive.

//? The seven primitve data types are:
// strings represent textual data
const buzzWord = 'Gotcha';
typeof buzzWord; // string 

// numbers for representing numeric data
const reports = 50; 
typeof reports; // number

// boolean for representing true/false values
const isNightMode = false;
typeof isNightMode; // boolean

// null represents the absence of any object value
const complaints = null;
typeof complaints; // object

// undefined represents a declared variable without a value
let noValue;
typeof noValue; // undefined

// symbol for creating unique indetifiers for objects
const mySymbol = Symbol('mySymbol');
typeof mySymbol; // symbol

// BigInt represents an integer that is too big
const hugeNumber = BigInt(9007199254740991);
typeof hugeNumber; // bigInt


//? objects are the only non-primitve data type in Javascript
//? objects consist of object literals, arrays, and dates 
// objects for storing collections of related data, that can contain properties and methods
const person2 = {
    name: 'john',
    age: '30',
    hobbies: ['reading', 'swimming', 'hiking'],
    greet: () => {
        console.log(`hello, my name is ${person2.name} and my hobbies are: ${person2.hobbies.join(' ').toString()}`);
    }
}
typeof person2; // object

// arrays are used to store a collection of data items of any type, such as strings, numbers, and objects.
const arrayExample = [1, 2, 3, 4];
typeof arrayExample; // object

// date method is used to set the date
const aNewDate = new Date();
typeof aNewDate; // object




//! Question: Explain the difference between var, let, and const?

//* Answer: var is function scoped, let and const are block scoped. 

//? VAR can be re-declared and re-assigned within its scope.
//? CONST cannot be re-assigned, but its properties can be changed. 
//? LET can be re-assigned and changed within its scope.




//! Question: What is closure in JavaScript and how does it work?

//* Answer: Closure is a feature in JavaScript where a function has access to its outer scope even after the outer function has returned. 

//? A closure is created when a function is defined inside another function and retains access to its outer function's variables.

const changeBackgroundColor = (color) => {
    return function () {
        document.body.style.backgroundColor = color;
    }
}

document.querySelector('button').addEventListener('click', changeBackgroundColor('#353839'));
document.querySelector('button').addEventListener('click', changeBackgroundColor('#fafafa'));




//! Question: What is the difference between a regular function and an anonymous function?

//* Answer: A regular function is declared with the function keyword and has a name to be called by later. An anonymous function is a function declared without a name.

//? Anonymous functions do not have a lexical 'this'.
//? Anynomous functions cannot be used as constructor functions.

// Regular function
function greet(name) {
    console.log(`Hello ${name}`);
}

// Anonymous function
const greeting2 = function(name) {
    console.log(`Hello, ${name}`);
}




//! Question: How you declare functions?

//* Answer: Functions can be declared by using the following: Function keyword, function expression, arrow function.

//? Function keyword (regular function)
function yourFunctionName() {
    // your code goes here
}

//? Function expression
const yourFunctionName = function() {
    // your code goes here
}

//? Arrow function multiple statments, no arguments
const yourFunctionName = () => {
    // your code goes here
}

//? Arrow function with multiple statements and arguments
const myFunction3 = (...param) => {
    // your function goes here
}

//? Arrow function implicit return 
const subtraction = (num1, num2) => (num1 + num2);

//? Arrow function single statement
const add = (num1, num2) => num1 + num2;

//? Arrow function single argument and single statement
const greeting = name => console.log(`Hello ${name}.`);

//? Function constructor 
const yourFunctionName = new Function(
// your code goes here
)

//? Immediately Invoked Function Expression (IIFE)
(function () {
    let eveningGreeting = 'Good Evening';
    console.log(eveningGreeting);
})();




//! What is the difference between an arrow function and regular function expression?

//* arrow functions are useful for creating short, one-liner functions or for working with callbacks. 'this' is lexically scoped based on surrounding scope.
//* function expressions allow more flexibility and are useful when defining methods on an object or when you need access to the arguments obj. Has own 'this'.

const regularThis = {
    name: "John",
    greeting: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
regularThis.greeting(); // "Hello, my name is John"

const arrowThis = {
    name: "john",
    greeting: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}
arrowThis.greeting(); // "Hello, my name is " 




//! Question: Describe the event loop in Javascript and its role in handling asynchronus code?

//* Answer: The event loop is a mechanism in JavaScript that handles the execution of code and manages the callback queue. It processes the messages or events in the queue and executes the corresponding code.

//? The event loop processes synchronous task before asynchronous task, which means that synchronous code will always be executed before any asynchronous code.




//! Question: How do you loop over an array and select a random element from that array?

//* Answer: To loop over an array in javascript you can use a for loop.
//* To return a random element, you can use Math.random().

const streamingPlatforms = ['netflix', 'prime video', 'hulu', 'peacock', 'hbomax'];

for (let i = 0; i < 1; i++) {
    const randomIndex = Math.floor(Math.random() * streamingPlatforms.length);
    const randomPlatform = streamingPlatforms[randomIndex];
    console.log(randomPlatform);
}

// example 2:
for (let i = 0; i < 1; i++) {
    const skills = ['html', 'css', 'javascript', 'bootstrap'];
    const randomSkill = skills[Math.floor(Math.random() * skills.length)];
    console.log(randomSkill);
}




//! Question: Which array methods can be used to create a new array?

//* Answer: In javascript, you can create a new array with the following methods: map(), filter() and reduce().

[1, 2, 3, 4, 5].map((num) => Math.pow(num, 2)); // [1, 4, 9, 16, 25]

[1, 2, 3, 4, 5].filter((num) => num % 2); // [1, 3, 5]

[1, 2, 3, 4, 5].reduce((acc, num) => acc + num); // 15




//! What is hoisting in Javascript?

//* Answer: Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope, regardless of where they are declared in the code. 

//? This means that variables declared with var can be used before they are declared, while variables declared with let and const are not hoisted and cannot be used before declared.

helloWorld();

function helloWorld() {
    console.log('hello world!');
}



//! Question: How do you handle errors and exceptions in JavaScript?

//* Answer: Errors and exceptions can be handled in JavaScript using try-catch statements and throw statements. 

//? The code that might throw an error is put inside a try block, and the catch block is used to handle the error. 
//? The catch block takes an error object as an argument, which provides information about the error that was thrown.

try {
    // code to try 
} catch(error) {
    // error handling
}


function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    } 
    return a / b;
}




//! Question: Can you explain the difference between synchronous and asynchronous code in JavaScript?

//* Answer: Synchronous code is executed in a blocking manner while asynchronous code allows for multiple events to be proccessed simultaneously.

//? Synchronus code will not execute the next line of code until the current line of code has finished.

//? Asynchronous code, on the other hand, does not block the execution of the rest of the code and allows multiple events to be processed simultaneously.




//! Question: What is async/await

//* Answer: async/await allows you to write asynchronous code. When a long-running task needs to be performed without blocking the main threat execution.

//? This can be useful for making network request or accessing a database.

// fetching data from a website 
async function getdata() {
    try {
        const response = await fetch('https://www.websiteLinkHere.com');
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log('There was an error:', error);
    }
}




//! Question: What is the difference between null and undefined in JavaScript?

//* Answer: null is a value that represents the intentional absence of any object value. 
//* undefined is a value that indicates that a variable has been declared but has not been assigned a value.




//! Question: Can you explain how prototype-based inheritance works in JavaScript?

//* Answer: Prototype-based inheritance in JavaScript is a way of sharing properties and methods among objects without the need for a class. 

//? In JavaScript, objects can inherit properties and methods from other objects through their prototypes. This means that an object can inherit properties and methods from its prototype, which can in turn inherit properties and methods from its own prototype, and so on.




//! Question: What is a callback function?

//* Answer: A callback function is a function that is passed as an argument to another function and it is executed after some operation or event is executed.

function fetchData(url, onSuccess, onError) {
    fetch(url)
    .then(response => response.json())
    .then(data => onSuccess(data))
    .catch(error => onError(error));
}

function handleSuccess(data) {
    console.log("Data received:", data);
}

function handleError(error) {
    console.log("Error:", error);
}

fetchData("https://example.com/data", handleSuccess, handleError);




//! Question: What is JSON and what is it used for?

//* Answer: JavaScript Object Notation, or JSON is a standard text based data format used in web development to send and receive data.

//? JSON is used to return data in the form of key-value pairs and arrays. This information is lightweight, and easy for humans to read and write.

// fetching and sorting json data based off a predefined filter.
function fetchData() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const dataFilter = data.filter(item => item.price > 50);
        const filteredData = dataFilter.sort((a, b) => b.price - a.price);
        console.log(filteredData);
    })
    .catch(error => console.log('There was an error processing your request:', error));
}

// using JSON.stringify() and JSON.parse().
class User {
    constructor(age, sex, location) {
        this.age = age;
        this.sex = sex;
        this.location = location;
    } 
}

const platformUser = new User('John', 'Male', 'New York');

const jsonString = JSON.stringify(platformUser); // from javascript to JSON 

const parsedUser = JSON.parse(jsonString); // from JSON to javascript




//! Question: What are promises and what are they used for?

//* Answer: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises have three possible states: "pending", "fulfilled", or "rejected".

//? Promises allow for you to write code that can respond to the results of asynchronous operations once complete, and doesn't block the main thread of execution.

function getJoke() {
    const jokePromise = new Promise((resolve, reject) => {
        fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
        .then(response => response.json())
        .then(data => resolve(data.joke))
        .catch(error => reject(error));
    });
    jokePromise.then(joke => {
        jokeText.innerText = `${joke}😂`;
    }).catch(error => {
        console.error(error);
    });
}




//! Question: What is promise chaining and why would you use it?

//* Answer: Promise chaining makes asynchronous code easier to read and understand when dealing with nested and complex operations.

//? Promises allow you to seperate the logic of each operation into seperate functions, which can be chained together in a clear and concise manner.

checkout()
.then(data => {
    return getPayment(data);
})
.then(response => {
    return placeOfOrder(data);
})
.then(response => {
    orderStatus();
})
.catch(error => {
    //handle errors
})




//! Question: How do you fetch data from an API with Javascript?

//* Answer: To fetch data from an API using Javscript, you can use the 'fetch' and 'catch' methods to fetch API data. 

//? The fetch method is used to make an HTTP request to an API and returns a 'promise' that resolves to the response of the server.

// Object used to distinguish what method of request
const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}
// fetching API data
fetch("/get-data-from-api", requestOptions)
    .then(response => response.json())
    .then(data => {
        // do something with data
        console.log(data);
    })
    .catch(error => {
        // how to handle data
        console.log('There was an error fetching data:', error);
});




//! Question: What is a constructor and why is it useful?

//* Answer: The constructor function allows you to create multiple objects with similar properties and methods. 

//? Instead of creating each object manually, you can use a constructor function to create new objects with the same structure and behaviors.

class Car {
    constructor(color, year, make, model) {
        this.color = color;
        this.year = year;
        this.make = make;
        this.model;
    }
}
const myCar = new Car('Red', '2018', 'Honda', 'Civic');
console.log(`You car color is: ${myCar.color}`);




//! Question: What are the different types of loops in Javascript

//* Answer: There are four different types of loops in Javascript: For loops, while loops, do while, forEach 

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// for in (objects)
const person = {
    name: 'John',
    age: '30'
}

for (let key in person) {
    console.log(key, person[key]); 
    // name John
    // age 30
}

// for of (arrays)
const colors = ['red', 'orange', 'yellow'];

for (let color of colors) {
    console.log(color); // red orange yellow
}

// while loop
let j = 0;

while (j < 5) {
    console.log(j) // 1 2 3 4
    j++
}

// do while loop
j = 0;

do {
    console.log('hi'); // hi hi hi hi hi
    j++
} while (j < 5);

// forEach
const cars = ['honda', 'chevy', 'toyota'];

cars.forEach((element) => {
    console.log(element.toUpperCase()); // HONDA CHEVY TOYOTA
});




//! Question: What is recursion?

//* Answer: Recursion happens when a function calls itself, either directly or indirectly. 

//? In a recursive function, the function repeatedly breaks down a problem into smaller and smaller sub-problems until it reaches a base case, which is a problem that is simple enough to solve directly.

function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
}




//! What is the spread operator and why is it useful?

//* The spread operator in JavaScript is represented by three consecutive dots (...) and is used to "spread" or expand an iterable object like an array, string, or object into individual elements.

function sum(...numbers) {
    let total = 0;
    for(const number of numbers) {
        total += number;
    }
    return total // sum(1, 2, 5, 10, 15) = 33
}

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const mergedObj = {...obj1, ...obj2}; // { a: 1, b: 2, c: 3, d: 4 }




//! Question: What is REST API?

//* Answer: REST is a web architecture that allows different systems to communicate with each other through a set of standardized rules and protocols. 

//? REST APIs use HTTP methods (GET, POST, PUT, DELETE, etc.) to retrieve or manipulate data and resources from a web server.

const url = 'https://websiteURL.com'

// GET request 
fetch(url)
.then(response => response.json())
.then(data => {
    // access data in the JSON object
})
.catch(error => console.error(error));

// POST request

function getJoke() {
    fetch('https://icanhazdadjoke.com/' , {
        headers: {
            'Accept' : 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        console.log(joke);
    }).catch(error => console.error(error));
}

// PUT request
const updatedPost = {
    id: 1,
    title: 'My updated post',
    body: 'This is my updated content',
    uderId: 1
}

fetch(`${url}/${updatedPost.id}`,{
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(updatedPost)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));




//! Question: What is the Math object in javascript?

//* Answer: The Math object is a built-in Javascript object that provides a set of properties and methods for performing mathematical operations.

Math.abs(-5); // returns absolute value of the number --> 5
Math.ceil(4.3); // rounds a number up to the nearest integer --> 5
Math.round(4.5); // rounds a number to the nearest integer --> 5
Math.pow(4, 2); // returns x raised to power of y --> 16
Math.sqrt(9); // returns the square root of a number --> 3
Math.floor(4.9); // rounds a number down to the nearest integer --> 4
Math.sin(Math.PI / 4); // returns sine of given angle in radians --> 0.7071067811865475
Math.cos(Math.PI / 6); // returns cossine of given angle in radians --> 0.8660254037844387
Math.min(5, 2, 6, 9); // returns smallest of zero or more numbers --> 2
Math.max(12, 16, 45, 30); // returns largest of zero or more numbers --> 45
Math.log(10); // returns natual logarithm of number --> 2.302585092994046
Math.exp(); // returns value raised to power of x
Math.random(); // returns a random number between 0 and 1 
Math.floor(Math.random * 10); // returns a random number 1 - 10
Math.PI.toFixed(3); // returns a number specified by number of decimal places --> 3.141
Math.PI.toPrecision(3); // returns a number specified by number --> 3.14
Math.PI.valueOf(); // returns value of number --> 3.141592653589793
Number('15'); // converts string to number --> 15
parseInt('3 months'); // returns first whole number --> 3
parseFloat('3.5 days'); // returns first floating point number --> 3.5
Number.MAX_VALUE; // returns largest possible JS number
Number.MIN_VALUE; // returns smallest possible JS number
Number.NEGATIVE_INFINITY; // returns -infinity
Number.POSITIVE_INFINITY; // returns infinity





//! Question: How do you work with dates in Javascript?

//* Answer: You can work with dates using the built-in 'Date' object.

//? The Date object provides numerous methods for working with dates.

const date = new Date(); // Tue Mar 14 2023 17:33:31 GMT-0600 (Mountain Daylight Time)
date.getDate(); // returns the currrent day --> 14
date.getMonth() + 1; // returns the current month index + 1 --> 3
date.getFullYear(); // returns full year --> 2023
date.getHours(); // returns current hour --> 17
date.getMinutes(); // returns current minutes --> 38
date.getSeconds(); // returns current seconds --> 31
date.getMilliseconds(); // returns current milliseconds 
date.getTime(); // returns unix timestamp --> 1678836811532
date.setDate(14); // sets the current date to 15
date.setMonth(3); // sets month to second month 
date.setFullYear(2024); // sets year to 2024
date.setHours(10); // sets hours to 10 
date.setMinutes(45); // sets minutes to 45
date.setSeconds(30); // sets seconds to 30
date.setMilliseconds(20); // sets milliseconds to 20
date.setTime(1678836811532); // sets unix time




//! Question: What is the difference between == and === in Javascript?

//* Answer: == and === are two different comparison operators that are used to compare values. 

//? The == operator checks if two values are equal after performing type coercion.

//? The === operator checks if two values are equal, but does not perform type coercion.

1 == "1" // true
1 === "1" // false




//! Question: What are template literals in Javascript?

//* Answer: Template literals allow you to embed expressions and variables inside a string, using the `${}` syntax.

const phone = 'iPhone';
const message = `I own an ${phone}`;




//! Question: How do you manipulate the Document Object Model (DOM)

//? Answer: The Document Object Model (DOM) can be manipulated using JavaScript through its API, which provides methods and properties to access and modify HTML elements and their content.




//! Question: How do you create elements in the DOM?

//* Answer: To create an element in the DOM, use document.createElement().

const element = document.createElement('element');
parentElement.appendChild('element');

const newDiv = document.createElement('div');
body.appendChild('div');

const ul = document.createElement('ul');
const li = document.createElement('li');
ul.appendChild(li);




//! Question: How do you delete elements in the DOM?

//* Answer: To delete elements in the DOM, use the removeChild() or remove() method.

parent.removeChild();
child.remove();


ul.removeChild(li);
li.remove();




//! Question: How do you query DOM elements?

//* Answer: To query DOM elements, use document.querySelector() or document.querySelectorAll().

//? document.querySelector() returns the first element found in the query.

//? document.querySelectorAll() returns all specified elements in a Node list.

const domElement = document.querySelector('#elementId');

const domElements = document.querySelectorAll('p'); // [Nodelist]




//! Question: How do you modify an elements attribute using the DOM?

//* Answer: To modify an elements attritbutes, you can use element.style. to modify the objects styles

// modifying the style object
element.style.backgroundColor = 'red';

// modifying id 
element.id = 'myId';

// modifying class
element.classList.add('myClass');
element.classList.remove('myClass');

// modifying text
element.innerText = '';

// modifying the HTML
element.innerHTML = '<p> new paragraph </p>';

// modifying the attribute
element.setAttribute(attribute, value);
element.removeAttribute(attribute);




//! Question: How do you select a specific element based on its position in a nodeList?

//* Answer: You can use bracket notation to access individual elements in the nodelist.

//? The nodeList is a zero-indexed array-like object, so the first element has an index of 0.

const secondParagraph = document.querySelectorAll('p')[1]; // selects the second paragraph in the nodelist




//! Question: What is Big-O notation?

//* Answer: Big O notation is a mathematical notation used to describe the asymptotic upper bound of the growth rate of a function.

//? Ask yourself how does the algorithm grow as 'n' grows?

const data = [1, 2, 3];
// Time complexity: O(n) --> input grows 1 to 1 with output
// Space complexity: O(1)
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}


const out = [];
// Time complexity: O(n)
// Space complexity: O(1) --> creating a new array from the data array.
for (let i = 0; i < data.length; i++) {
    out[i] = data[i];
}

const data2 = ['A', 'B', 'C'];
// O(n * a)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data2.length; j++) {
        console.log(data[i] + data[j]);
    }
}

// O(n ^ 2)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        console.log(data[i] + data[j]);
    }
}

// O(4n^2) --> remove the leading constant, and/or the values that scale less = O(n^2)
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        console.log(data[i] + data[j]);
        console.log(data[i] + data[j]);
        console.log(data[i] + data[j]);
        console.log(data[i] + data[j]);
    }
}




//! Question: What are math operators in Javascript?

//* Answer: Math operators are used to perform arithmetic operations on values in Javascript.

// Assignment operator (=) 
// x = y

// Addition operator (+) 
// x = x + y => x += Y

// Subtraction operator (-)
// x = x - y => x -= y

// Multiplication operator (*)
// x = x * y => x *= y

// Division operator (/)
// x = x / y => x /= y

// Modulo operator (%)
// x = x % y => x %= y

// Exponentiation operator (**)
// x = x ** y => x **= y

// Increment operator (++)
// x = x + 1 => x++

// Decrement operator (--)
// x = x - 1 => x--