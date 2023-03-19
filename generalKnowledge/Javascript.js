// Key:
//! = Question
//* = Answer
//? = Explanation


//! Question: How can you optimize a website for performance?

//* Answer: There are several ways to optimize a website for performance:

//? Minifying and compressing files to reduce the size of the page and speed up loading times.

//? Using a content delivery network (CDN) to distribute content closer to users and reduce latency.

//? Using caching techniques to store frequently used resources locally, reducing the amount of data that needs to be transferred.

//? Optimizing images and videos to reduce their file sizes. Using lazy loading to defer loading of non-critical resources until they are needed.




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
    };
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
greet('John');

// Anonymous function
const greeting2 = function(name) {
    console.log(`Hello, ${name}`);
}
greet('John');



//! Question: How you declare functions?

//* Answer: Functions can be declared by using the following: Function keyword, function expression, arrow function.

//? Function keyword (regular function)
function keyword() {
    // your function goes here
}

//? Function expression
const myFunction = function() {
    // your function goes here
}

//? Arrow function multiple statments, no arguments
const myFunction2 = () => {
    // your function goes here
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
const myFunction4 = new Function(
// your function here
);




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

//? The event loop helps handle the execution of asynchronous code.




//! Question: How do you manipulate the Document Object Model (DOM)

//* Answer: The Document Object Model (DOM) can be manipulated using JavaScript through its API, which provides methods and properties to access and modify HTML elements and their content.




//! What is hoisting in Javascript?

//* Answer: Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope, regardless of where they are declared in the code. 

//? This means that variables declared with var can be used before they are declared, while variables declared with let and const are not hoisted and cannot be used before declared.




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

const sendMessage = (message) => {
    // code goes here 
    console.log("Message:", message);
}

const getMessage = (sendMessage) => {
    // code goes here
    const message = 'Your message goes here';
    sendMessage(message);
}

getMessage(sendMessage);




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
        this.name = name;
        this.sex = sex;
        this.location = location;
    } 
}

const platformUser = new User('John', 'Male', 'New York');

const jsonString = JSON.stringify(platformUser); // from javascript to JSON 

const parsedUser = JSON.parse(jsonString); // from JSON to javascript




//! Question: What are promises and what are they used for?

//* Answer: Promises are a way to handle asynchronous operations, like fetching data from a server or making an API call. 

//? Promises allow for you to write code that can respond to the results of asynchronous operations once complete, and doesn't block the main thread of execution.

//TODO api not working
//TODO fix the request option
const requestConfig = {
    method: 'GET',
    headers: {
        "Content-Type" : "application/json"
    }
}

const randomJoke = () => {
    return new Promise((resolve, reject) => {
        fetch('https://official-joke-api.appspot.com/random_joke', requestConfig)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

randomJoke()
.then(joke => console.log(joke.setup, joke.punchline))
.catch(error => console.log(error));




//! Question: What is promise chaining and why would you use it?

//* Answer: Promise chaining makes asynchronous code easier to read and understand when dealing with nested and complex operations.

//? Promises allow you to seperate the logic of each operation into seperate functions, which can be chained togetehr in a clear and concise manner.

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
const newPost = {
    title: 'New post',
    body: 'This is my new content.',
    userId: 1
}

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newPost)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

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
1 === "false" // false




//! Question: What are template literals in Javascript?

//* Answer: Template literals allow you to embed expressions and variables inside a string, using the `${}` syntax.

const phone = 'iPhone';
const message = `I own an ${phone}`;




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