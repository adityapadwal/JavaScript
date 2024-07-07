// The second method of doing inheritance in Js (ES5) is classical inheritance

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
function Child(relation) {
    // Classical Inheritance
    Parent.call(this, relation);
    // Parent.apply(this, [relation]);
};

var child1 = new Child(`Son`);
var child2 = new Child(`Daughter`);

child1.show();  // logs Son 
child2.show(); // logs Daughter

// child instance is not able to call method at parent's prototype level
// child1.parentPrototypeMethod();
// child2.parentPrototypeMethod();

child1.jobs.push('Data Scientist');
console.log(child1.jobs); // logs [ 'DevOps Engr', 'Fullstack Engr', 'Data Scientist' ]
console.log(child2.jobs); // logs [ 'DevOps Engr', 'Fullstack Engr' ]

// Limitations (Disadvantages)
// 1. No function reuse - at memory level
// 2. Child can't access methods defined at parent's prototype level
