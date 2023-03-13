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
}

// dot notation
const personName = person.name; // john

// bracket notation
console.log(person["age"]); // 30

Object.keys(person); // ['name', 'age', 'location']
Object.values(person); // ['john', '30', 'usa']
Object.entries(person); // [['name', 'john'], ['age', '30'], ['location', 'usa']]
Object.assign(person, occupation); // {name: 'john', age: '30', location: 'usa', job: 'Software Engineer', rate: '$100'}