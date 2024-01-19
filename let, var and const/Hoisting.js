// III. Hoisting difference between let, var and const
/*
var: var declarations are hoisted to the top of their function or global scope and initialized with undefined. 
This allows you to use the variable before its declaration in the code.

let and const: They are also hoisted to the top of their block, but they are not initialized. 
Trying to access the variable before its declaration results in a ReferenceError.
*/

// Hoisting using var (No reference error)
console.log(x);
sayHello1();

var x = 7;
function sayHello1() {
    console.log("Hello JavaScript!");
}

// Hoisting using let ( Gives reference error)
console.log(y);
sayHello2();

let y = 7;
function sayHello2() {
    console.log("Hello JavaScript!");
}

// Hoisting using const ( Gives reference error)
console.log(z);
sayHello3();

const z = 7;
function sayHello3() {
    console.log("Hello JavaScript!");
}
