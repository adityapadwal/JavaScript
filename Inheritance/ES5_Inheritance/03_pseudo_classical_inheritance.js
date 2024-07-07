// The third method of doing inheritance in Js (ES5) is pseudo classical inheritance
// Pseudo classical inheritance = Prototype chaining + classical inheritance

// This code also includes polymorphism (Function over-riding)

// Human - base class
// Student - derived class

// Creating a human constructor function
function Human(name) {
    this.name = name;
}

// prototypes methods of human constructor function
Human.prototype.speak = function() {
    console.log(`I speak English`);
}
Human.prototype.introduction = function() {
    console.log(`Hi, my name is ${this.name}`);
}

// Prototype chaining
Student.prototype = new Human();
Student.prototype.constructor = Student;

// student constructor function
function Student(name, school, cources) {
    // Classical Inheritance
    Human.call(this, name);
    // Human.apply(this, [name]);

    this.school = school;
    this.cources = cources;
}

// prototypes of student constructor function
Student.prototype.introduction = function() {
    console.log(`Hi, my name is ${this.name}, I am a student of ${this.school}, I study ${this.cources}`);
}
Student.prototype.takesExam = function() {
    console.log(`Its exam time!`);
}

// creating objects
var human = new Human(`Aditya`);
human.speak();
human.introduction();

// creating objects
var student = new Student(`Aditya`, `DYPIT`, [`HTML`, `CSS`, `JS`]);
student.speak();
student.introduction();
student.takesExam();

// polymorphism
function handleIntroduction(obj) {
    obj.introduction();
}
handleIntroduction(human);
handleIntroduction(student);