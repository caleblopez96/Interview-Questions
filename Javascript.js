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




//! Question: Explain the difference between var, let, and const.

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

//* Answer: Errors and exceptions can be handled in JavaScript using try-catch statements. 

//? The code that might throw an error is put inside a try block, and the catch block is used to handle the error. 
//? The catch block takes an error object as an argument, which provides information about the error that was thrown.




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




//! What is JSON and what is it used for?

//* JavaScript Object Notation, or JSON is a standard text based data format used in web development to send and receive data.

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

//* Answer: Promises are a way to handle asynchronous operations, like fetching data from a server or making an API call. 

//? Promises allow for you to write code that can respond to the results of asynchronous operations once complete, and doesn't block the main thread of execution.

//TODO api not working
const randomJoke = () => {
    return new Promise((resolve, reject) => {
        fetch('https://official-joke-api.appspot.com/random_joke')
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




//! What is a constructor and why is it useful?

//* The constructor function allows you to create multiple objects with similar properties and methods. 

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