**JavaScript Cheatsheets and Notes**

**Description:**
This file contains my collection of JavaScript cheatsheets, algorithms, interview questions, and other notes that I use for reference and learning. It is a living file as I update it frequently.

## Categories
* Data types and variables
* Control structures</li>
* Functions
* DOM manipulation
* Events
* ES6 Features
* Algorithms and data structures
* Interview questions
* Libraries and frameworks


**Contributing:**
If you have any suggestions, corrections, or additions to my JavaScript notes, feel free to create a pull request or open an issue in this repository.

**Contact:**
If you have any questions, you can reach me at caleblopez96@gmail.com





**Cheat Sheets**<br>

**-Strings-**<br>

**.length** 
``` js
// Returns the number of characters in a string.
'Javascript'.length; // 10
```
**.charAt()**
``` js
// Used to return the character at a specific index in a string.
'Javascript'.charAt(2); // v
```
**[]**
``` js
// Use brackets to access the character at a specific index in a string.
'Javascript'[2]; // v
```
**.indexOf()**
``` js
// Used to find the first index of a substring within a string.
'Javascript'.indexOf('c'); // 5
```
**.toLowerCase()**
``` js
// Converts a string to lowercase.
'Javascript'.toLowerCase(); // javascript
```
**.toUpperCase()**
``` js
// Converts a string to uppercase.
'Javascript'.toUpperCase(); // JAVASCRIPT
```
**.slice()**
``` js
// Used to extract a section of a string and return it as a new string
// *without* modifying the original string.
// string.slice(start, end)
'Javascript'.slice(0, 4); // Java
```
**.substring()**
``` js
// Used to extract a section of a string and return it as a new string
// *without* modifying the original string.
// substring(indexStart, indexEnd)
'Javascript'.substring(4); // script
```
**.concat()**
``` js
// Concatenates two or more strings together, and returns the resulting concatenated string.
// concat(str1, str2, /* …, */ strN)
'Javascript'.concat(' Developer'); // 'Javascript Developer'
```
**.split()**
``` js
 // Splits a string into an array of substrings, based on a specified separator string or regular expression.
'Javascript'.split('Developer'); // ['Javascript', 'Developer']
```
**.includes()**
``` js
// Method is used to determine whether a string contains another string. 
// Returns a boolean value.
// includes(searchString, position)
'Javascript'.includes('Java'); // True
```
**.replace()**
``` js
// Used to replace a substring with a new substring in a string.
// Returns a new string with specificed element replaced.
'Javascript Developer'.replace('Developer', 'sucks'); // 'Javascript sucks'
```
**.replaceAll()**
``` js
// Used to replace a substring with a new substring in a string.
// Returns a new string with specificed element replaced.
'JS JS'.replaceAll('JS', 'Javascript'); // 'Javascript Javascript'
```
**.trim()**
``` js
// used to remove white space (spaces, tabs, and newline characters) from both ends of a string.
// It returns the trimmed string as a new string, leaving the original string unchanged.
'     Javascript     '.trim(); // 'Javascript'
```
**.trimStart()**
``` js
// method is used to remove white space (spaces, tabs, and newline characters) from the beginning of a string. 
// Returns the trimmed string as a new string, leaving the original string unchanged.
'     Javascript'.trimStart(); // 'Javascript'
```
**.trimEnd()**
``` js
// method is used to remove white space (spaces, tabs, and newline characters) from the end of a string. 
// Returns the trimmed string as a new string, leaving the original string unchanged.
'Javascript   '.trimEnd(); // 'Javascript'
```
**.padStart()**
``` js
// used to pad the beginning of a string with a specified character, 
// until the resulting string reaches a given length.
// padStart(targetLength, padString)
'Javascript'.padStart(3, '0'); // '000Javascript'
```
**.endsWith()**
``` js
// Used to determine whether a string ends with a specified suffix. 
// Returns boolean value
'Hello, World'.endsWith('World'); // True
```
**.repeat()**
``` js
// Used to create a new string by repeating the original string a specified number of times.
'Javascript'.repeat(3); // 'JavascriptJavascriptJavascript'
```
**.indexOf()**
``` js
// Searches for a specified substring within a string.
// Returns the index of the first occurrence of the substring. 
// If the substring is not found, it returns -1.
'Javascript Developer'.indexOf('Developer'); // 11
```
**.lastIndexOf()**
``` js
//  Searches for the last occurrence of a specified substring within a string.
// indexOf(searchString, position)
'Javascript Developer'.lastIndexOf('Developer'); // 11
```
**.search()**
``` js
// Searches for a specified substring within a string.
// Returns the index of the first occurrence of the substring.
// search(regexp)
```


**-Arrays-**<br>

**.length**
``` js
// Returns the number of elements in an array. 
// It is a read-only property, which means you cannot set the length of an array directly using this property.
[1, 2, 3, 4, 5].length; // 5
```
**.push()**
``` js
// Adds element(s) to the end of an array and returns the new length
[1, 2, 3, 4, 5].push(1); // 6 --> [1, 2, 3, 4, 5, 1]
```
