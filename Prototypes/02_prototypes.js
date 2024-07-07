// Creeating a Person constructor function
function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

// Creating a prototype of Person constructor function
Person.prototype.calculateAge = function() {
    console.log(`The current age of ${this.name} is: `, (2024 - this.yearOfBirth));
}
console.log(Person.prototype);

// Creating objects of Person constructor function
let person1 = new Person('Virat Kohli', 'Batsman', '2000');
console.log(person1);

let person2 = new Person('Jasprit Bumrah', 'Bowler', '2002');
console.log(person2);

person1.calculateAge();
person2.calculateAge();
