**JavaScript Cheatsheets and Notes**

**Description:**
This file contains my collection of JavaScript cheatsheets, algorithms, interview questions, and other notes that I use for reference and learning. It is a living file as I update it frequently.

**Categories**
<ul> 
<li>Data types and variables</li>
<li>Control structures</li>
<li>Functions</li>
<li>DOM manipulation</li>
<li>Events</li>
<li>ES6 Features</li>
<li>Algorithms and data structures</li>
<li>Interview questions</li>
<li>Libraries and frameworks</li>
</ul>

**Contributing:**
If you have any suggestions, corrections, or additions to my JavaScript notes, feel free to create a pull request or open an issue in this repository.

**Contact:**
If you have any questions, you can reach me at caleblopez96@gmail.com

**DISCLAIMER:** <br>
<i>This project is intended for personal use only, and was created as a means of enhancing my JavaScript skills. It is not intended for commercial use, and I make no guarantees regarding its functionality or compatibility with all systems or browsers.</i><br>

<i>By using this code, you assume all risk and responsibility for any implications or legal issues that may arise, including but not limited to any violations of the terms of service for the platform on which it is used. I am not responsible for any damages or losses that may occur as a result of the use of this code.</i><br>




**Data types and variables**
<ul>
<b>Question:</b> What is the data type of all variables in Javascript? 

<b>Answer:</b> All Javascript variables are of the object data type.<br>
</ul>

<ul>
<b>Question:</b> What are the different data types in Javascript?

<b>Answer:</b> Javascript has several data types that can be divided into two categories: primitve and non-primitive.
</ul>

``` 
// strings represent textual data
const buzzWord = 'Gotcha';
typeof buzzWord; // string
```
``` 
// numbers for representing numeric data
const reports = 50; 
typeof reports; // number
```
``` 
// boolean for representing true/false values
const isNightMode = false;
typeof isNightMode; // boolean
```
``` 
// null represents the absence of any object value
const complaints = null;
typeof complaints; // object
```
``` 
// undefined represents a declared variable without a value
let noValue;
typeof noValue; // undefined
```
``` 
// symbol for creating unique indetifiers for objects
const mySymbol = Symbol('mySymbol');
typeof mySymbol; // symbol
```
``` 
// BigInt represents an integer that is too big
const hugeNumber = BigInt(9007199254740991);
typeof hugeNumber; // bigInt
```
``` 
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
```
``` 
// arrays are used to store a collection of data items of any type, such as strings, numbers, and objects.
const arrayExample = [1, 2, 3, 4];
typeof arrayExample; // object
```














**Control structures**





**Functions**





**DOM manipulation**





**Events**





**ES6 Features**





**Algorithms and data structures**





**Interview questions**





**Libraries and frameworks**
