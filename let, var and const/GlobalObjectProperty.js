// V. Global Object Property difference between let, var and const
/*
var: Variables declared with var become properties of the global object (e.g., window in a browser environment).
let and const: They do not become properties of the global object when declared in the global scope.
*/

// var - becomes property of the global object
var h = 70;
console.log(window.h);  // Outputs 70 in a browser environment

// let/const - do not become properties of the global object
let i = 80;
console.log(window.i);  // Outputs undefined