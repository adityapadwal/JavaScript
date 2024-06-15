// JavaScript uses prototypes for inheritance, 
// where objects can inherit properties and methods from other objects.

function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

let alice = new Person("Alice");
alice.greet(); // Output: Hello, my name is Alice
