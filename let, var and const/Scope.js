// I. Scope difference between let, var and const
/* 
var: Variables declared with var are function-scoped. 
This means they are only accessible within the function in which 
they are declared (or globally if declared outside of any function).

let and const: Variables declared with let and const are block-scoped. 
A block is any section of code enclosed in curly braces {}. 
This includes loops, if statements, and other code blocks. 
Block-scoping means the variable is only accessible within the block where it is defined.
*/

// var - function scoped
function exampleScopeVar() {
    if(true) {
        var x = 10;
    }
    console.log(x); // outputs 10
}
exampleScopeVar();

// let/const - block-scoped
function exampleScopeLetConst() {
    if (true) {
        let y = 20;
        const z = 30;
    }
    console.log(y);  // ReferenceError: y is not defined
    console.log(z);  // ReferenceError: z is not defined
}
exampleScopeLetConst();