function Person(name) {
    this.name = name;
}

console.log(Person);
console.log(Person.prototype);

Person.prototype.greet = function() {
    console.log(`My name is ${this.name}`);
}

console.log(Person);
console.log(Person.prototype);

let adityaObj = new Person('Aditya');
console.log(adityaObj.name);
adityaObj.greet();

/*
    JavaScript is a prototype-based, automatically adds a prototype property to functions upon creation. 
    This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function.
*/