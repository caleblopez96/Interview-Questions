// returns the number of characters in a string.
'Javascript'.length; // 10

// use brackets to access the character at a specific index in a string.
'Javascript'[2]; // v

// returns the character at a specific index in a string.
'Javascript'.charAt(2); // v

// finds the first index of a substring within a string.
'Javascript'.indexOf('c'); // 5

// converts string to lowercase.
'Javascript'.toLowerCase(); // javascript

// converts string to uppercase.
'Javascript'.toUpperCase(); // JAVASCRIPT

// extracts a section of a string.
'Javascript'.slice(0, 4); // Java

// extracts a section of a string.
'Javascript'.substring(4); // script

// concatenates two or more strings together.
'Javascript'.concat(' Developer'); // 'Javascript Developer'

// Splits a string into an array of substrings.
'Javascript'.split(' '); // ['Javascript']

// determine if string includes. 
'Javascript'.includes('Java'); // True

// replace a substring with a new substring in a string
'Javascript Developer'.replace('Developer', 'sucks'); // 'Javascript sucks'

// replaces all 
'JS JS'.replaceAll('JS', 'Javascript'); // 'Javascript Javascript'

// removes white space from both ends.
' Javascript '.trim(); // 'Javascript'

// removes white space from start.
' Javascript '.trimStart(); // 'Javascript '
// removes white space from end.
' Javascript '.trimEnd(); // ' Javascript'

// pad the beginning of a string.
'Javascript'.padStart(3, '*'); // ***Javascript

// determine if a string ends with.
'Javascript'.endsWith('t'); // true

// repeat
'Javascript'.repeat(3); // 'JavascriptJavascriptJavascript'

// search for a specified substring within a string.
'Javascript Developer'.indexOf(' '); // 10

// search for last occurrence of a specified substring.
'Javascript Developer'.lastIndexOf('Developer'); // 11

// Searches for a specified substring within a string (regex).
'Javascript Developer'.search('l'); // 15