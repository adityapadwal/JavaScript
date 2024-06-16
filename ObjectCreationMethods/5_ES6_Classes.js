// Using ES6 Classes
// ES6 (ECMAScript 2015) introduced the class syntax, 
// which provides a more straightforward and modern way to create objects and handle inheritance.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Output: 'Hello, my name is Alice'
person2.greet(); // Output: 'Hello, my name is Bob'
