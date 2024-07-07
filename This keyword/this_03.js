// 03. Constructor function
// When a function is used as a constructor (called with the new keyword), 
// this refers to the newly created instance of the object.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('Alice', 30);
console.log(person); // Logs Person { name: 'Alice', age: 30 }
