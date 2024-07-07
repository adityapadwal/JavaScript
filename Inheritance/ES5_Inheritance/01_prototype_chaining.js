// The first method of doing inheritance in Js (ES5) is prototype chaining

// creating a Parent function constructor
function Parent(relation) {
    // constructor level properties
    this.relation = relation;
    this.jobs = [`DevOps Engr`, `Fullstack Engr`];

    // constructor level methods
    this.show = function() {
        console.log(`Relation is ${this.relation}`);
    }
}

// Prototype level method
Parent.prototype.parentPrototypeMethod = function() {
    console.log(`Inside parentPrototypeMethod`);
}

// Creating a child function constructor
function Child() {};

// Prototype chaining
Child.prototype = new Parent(`Mother`); // assigning the object of Parent function constructor to the prototype of the Child function constructor
Child.prototype.constructor = Child; // Maintans the sequesnce of execution of constructors

var child1 = new Child(`Son`);
var child2 = new Child(`Daughter`);

child1.show();  // logs Mother instead of Son (disadv)
child2.show(); // logs Mother instead of Daughter (disadv)

// child instance is able to call method at parent's prototype level
child1.parentPrototypeMethod();
child2.parentPrototypeMethod();

child1.jobs.push('Data Scientist');
console.log(child1.jobs); // logs [ 'DevOps Engr', 'Fullstack Engr', 'Data Scientist' ]
console.log(child2.jobs); // also logs [ 'DevOps Engr', 'Fullstack Engr', 'Data Scientist' ], this means pointing at same mem location (disadv)

// Limitations (Disadvantages)
// 1. Arguments cannot be passed to the super/base class methods through the objects of the derived/child class
// 2. Inherited properties / data members become prototype properties

// ***************************************************************
// Call and apply
// ***************************************************************

var person1 = {
    name: `Sachin`,
    city: `Mumbai`
}
var person2 = {
    name: `Virat`,
    city: `Delhi`
}

var sayHello = function() {
    console.log(`Hello ${this.name} from ${this.city}`);
}

// person1.sayHello(); // not possible
// sayHello(person1); // not possible
// Here we want to call a function by passing an object to it 
// and access the properties of the object inside that function

// This is possible using call and bind
sayHello.call(person1); // logs `Hello Sachin from Mumbai`
sayHello.apply(person2); // logs `Hello Virat from Delhi`

// Hence, we can say that, with the help of call and apply, 
// We can pass objects as arguments to functions
// and the properties of these objects can be accessed 
// inside the function using the `this` keyword

// But, what is the difference between call and apply
// Let us understand wuing another example

var updateInfo = function(name, city) {
    this.name = name;
    this.city = city;
}
updateInfo.call(person1, "Mahi", "Ranchi"); // passing multiple parameters individually
sayHello.call(person1);

var newPerson2 = ["Yuvi", "Chandigarh"];

updateInfo.apply(person2, newPerson2); // passing multiple paramenters through an array
sayHello.apply(person2);