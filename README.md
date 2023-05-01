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





**Cheat Sheets**<br>

**Strings**<br>
``` js
// The string.length property returns the number of characters in a string.
'Javascript'.length; // 10
```

``` js
// Used to return the character at a specific index in a string.
'Javascript'.charAt(2); // v
```

``` js
// Use brackets to access the character at a specific index in a string.
'Javascript'[2]; // v
```

``` js
// Used to find the first index of a substring within a string.
'Javascript'.indexOf('c'); // 5
```

``` js
// Converts a string to lowercase.
'Javascript'.toLowerCase(); // javascript
```

``` js
// Converts a string to uppercase.
'Javascript'.toUpperCase(); // JAVASCRIPT
```

``` js
// Used to extract a section of a string and return it as a new string
// without modifying the original string.
// string.slice(start, end)
'Javascript'.slice(0, 4); // Java
```

``` js
// Used to extract a section of a string and return it as a new string
// without modifying the original string.
// substring(indexStart, indexEnd)
'Javascript'.substring(4); // script
```

``` js
// Concatenates two or more strings together, and returns the resulting concatenated string.
// concat(str1, str2, /* …, */ strN)
'Javascript'.concat(' Developer'); // 'Javascript Developer'
```

``` js
 // Splits a string into an array of substrings, based on a specified separator string or regular expression.
'Javascript'.split('Developer'); // ['Javascript', 'Developer']
```

``` js
// Method is used to determine whether a string contains another string. 
// Returns a boolean value.
// includes(searchString, position)
'Javascript'.includes('Java'); // True
```

``` js
// Used to replace a substring with a new substring in a string.
// Returns a new string with specificed element replaced.
'Javascript Developer'.replace('Developer', 'sucks'); // 'Javascript sucks'
```

``` js
// Used to replace a substring with a new substring in a string.
// Returns a new string with specificed element replaced.
'JS JS'.replace('JS', 'Javascript'); // 'Javascript Javascript'
```








' Javascript '.trim(); // 'Javascript'
' Javascript '.trimStart(); // 'Javascript '
' Javascript '.trimEnd(); // ' Javascript'
'Javascript'.padStart(10, '*'); //
'Javascript'.endsWith('t'); // true
'Javascript'.repeat(3); // 'JavascriptJavascriptJavascript'
'Javascript Developer'.indexOf(' '); // 10
'Javascript Developer'.lastIndexOf('Developer'); // 11
'Javascript Developer'.search('l'); // 15