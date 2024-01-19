// II. Reassignment difference between let, var and const
/*
var: You can reassign and redeclare var variables within the same scope without any issues.

let: You can reassign let variables within the same scope, 
    but you cannot redeclare them in the same scope.

const: Variables declared with const cannot be reassigned once they are assigned a value. They are constant. 
    However, for objects and arrays declared with const, the properties or elements can be modified, 
    but the reference to the object or array cannot be changed.
*/

// var - reassignment and redeclaration allowed
var x = 10;
console.log(x);
x = 12; // reassigning
console.log(x);
var x = 14; // redeclaring
console.log(x);
// hence, proved that we can reassign and redeclare identifiers using var

// let - reassignment allowed, redeclaration not allowed
function sample() {
    let y = 10;
    console.log(y);
    y = 15; // reassigning
    console.log(y);
    // let y = 20; (reference error: cannot redeclare)
    console.log(y);
}
sample();
// hence, proved that for identifiers using let, we can reassign but cannot redeclare

// const - neither reassignment not redeclaration allowed
function example() {
    const z = 100;
    console.log(z);
    z = 200; // (type error: cannot reassigning)
    console.log(z);
    // const z = 300  (reference error: cannot redeclare)
    console.log(z);
}
example();
// hence, proved that for identifiers using const, we can neither reassign nor redeclare