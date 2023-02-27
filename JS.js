// Key:
//! = Question
//* = Answer
//? = Explanation


//! Question: How can you optimize a website for performance?

//* Answer: There are several ways to optimize a website for performance:

//? Minifying and compressing files to reduce the size of the page
//? and speed up loading times.

//? Using a content delivery network (CDN) to distribute content
//? closer to users and reduce latency.

//? Using caching techniques to store frequently used resources
//? locally, reducing the amount of data that needs to be
//? transferred.

//? Optimizing images and videos to reduce their file sizes. 
//? Using lazy loading to defer loading of non-critical resources
//? until they are needed.




//! Question: Explain the difference between var, let, and const.

//* Answer: var is function scoped, let and const are block scoped. 

//? VAR can be re-declared and re-assigned within its scope.
//? CONST cannot be re-assigned, but its properties can be changed. 
//? LET can be re-assigned and changed within its scope.




//! Question: What is closure in JavaScript and how does it work?

//* Answer: Closure is a feature in JavaScript where a function
//* has access to its outer scope even after the outer function
//* has returned. 

//? A closure is created when a function is defined
//? inside another function and retains access to its outer
//? function's variables.




//! Question: How you declare functions?

//* Answer: Functions can be declared by using the following:
//* Function keyword, function expression, arrow function.

//? Function keyword 
function keyword() {
    // your function goes here
}

//? Function expression
const myFunction = function() {
    // your function goes here
}

//? Arrow function
const myFunction2 = () => {
    // your function goes here
}




//! Question: Describe the event loop in Javascript and its role in handling asynchronus code?

//* Answer: The event loop is a mechanism in JavaScript
//* that handles the execution of code and manages the callback queue.
//* It processes the messages or events in the queue and executes the corresponding code.

//? The event loop helps handle the execution of asynchronous code.




//! Question: How do you manipulate the Document Object Model (DOM)

//* Answer: The Document Object Model (DOM) can be manipulated
//* using JavaScript through its API, which provides methods and 
//* properties to access and modify HTML elements and their content.




//! What is hoisting in Javascript?

//* Answer: Hoisting is a behavior in JavaScript where variable
//* and function declarations are moved to the top of their scope,
//* regardless of where they are declared in the code. 

//? This means that variables declared with var can be used before
//? they are declared, while variables declared with let and const
//? are not hoisted and cannot be used before declared.




//! Question: How do you handle errors and exceptions in JavaScript?

//* Answer: Errors and exceptions can be handled in JavaScript using try-catch statements. 

//? The code that might throw an error is put inside a try block, 
//? and the catch block is used to handle the error. 
//? The catch block takes an error object as an argument, 
//? which provides information about the error that was thrown.




//! Question: Can you explain the difference between synchronous and asynchronous code in JavaScript?

//* Answer: Synchronous code is executed in a blocking manner,
//* while asynchronous code allows for multiple events to be proccessed simultaneously.

//? Synchronus code will not execute the next line of code until the current line of code has finished.

//? Asynchronous code, on the other hand, does not block the execution of the
//? rest of the code and allows multiple events to be processed simultaneously.




//! Question: What is async/await

//* Answer: async/await allows you to write asynchronous code.
//* When a long-running task needs to be performed without blocking the
//* main threat execution.

//? This can be useful for making network request or accessing a database.





//! Question: What is the difference between null and undefined in JavaScript?

//* Answer: null is a value that represents the intentional absence of any object value.
//* undefined is a value that indicates that a variable has been declared but has not been assigned a value.




//! Question: Can you explain how prototype-based inheritance works in JavaScript?

//* Answer: Prototype-based inheritance in JavaScript is a way of
//* sharing properties and methods among objects without the need for a class. 

//? In JavaScript, objects can inherit properties and
//? methods from other objects through their prototypes. 
//? This means that an object can inherit properties and methods
//? from its prototype, which can in turn inherit properties and
//? methods from its own prototype, and so on.
