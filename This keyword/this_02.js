// 2. Function Context
// Inside a function, the value of 'this' depends upon how the function is called

// 2A. Global function call
// When a function is called without an object reference, 
// this refers to the global object (in non-strict mode) or undefined (in strict mode).
// "use strict"
function showThis() {
    console.log(this);
}
showThis(); // In non-strict mode, logs Window; in strict mode, logs undefined

// 2B. Method call
// When a function is called as a method of an object, this refers to the object that the method is called on.
const obj = {
    name: 'John',
    showThis: function() {
        console.log(this);
    }
};
obj.showThis(); // Logs obj
