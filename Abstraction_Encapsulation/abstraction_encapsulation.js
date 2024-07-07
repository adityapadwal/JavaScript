// creating a person function constructor

// abstraction includes both id and name
// encapsulation includes making a name private to a function by declaring it as a local variable (here => name)
function Person() {
    this.id = 10; // public property (can be accessed outside any this Person function constructor)
    var name = "Aditya Padwal" // private property (cannot be accessed outside this Person function constructor)

    // private method (cannot be accessed outside this Person function constructor)
    var privateMethod = function() {
        console.log(`Inside private method`);
    }

    // public method (can be accessed outside this Person function constructor)
    this.publicMethod = function() {
        console.log(`Inside public method`);
    }
}

// creating prototype of Person function constructor
// public property (can be accessed outside the Person Function constructor)
Person.prototype.hobbies = [`Cricket`, `Tennis`];

// creating an object of the Person Function Constructor
let person1 = new Person();

// accessing properties of Person function constructor
console.log(person1.id); // logs 10
// console.log(person1.name); // logs undefined (as it cannot be accessed)

// accessing methods of Person function constructor
// person1.privateMethod(); // logs error
person1.publicMethod(); // logs publicMethod

console.log(person1.hobbies);
person1.hobbies.push(`Football`);
console.log(person1.hobbies);