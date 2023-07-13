// Object
const person = {
    name: 'john',
    age: '30',
    location: 'usa'
}
// Object
const occupation = {
    job: 'Software Engineer',
    rate: '$100'
}// dot notation
const personName = person.name; // john
// bracket notation
console.log(person["age"]); // 30




Object.keys(person); // ['name', 'age', 'location']
Object.values(person); // ['john', '30', 'usa']
Object.entries(person); // [['name', 'john'], ['age', '30'], ['location', 'usa']]
Object.assign(person, occupation); // {name: 'john', age: '30', location: 'usa', job: 'Software Engineer', rate: '$100'}


// object destructuring
const user = {
    first: 'Marlon',
    last: 'Brando',
    email: 'example@email.com',
    followers: 1250,
    birthYear: 1984
}

// Destructure object and create variables for destructured values
const { first, last, birthYear } = user;
console.log(first); // Marlon

function makeUserName({ first, last, birthYear }) {
    return first + last + birthYear;
}

console.log(makeUserName(user)); // MarlonBrando1984