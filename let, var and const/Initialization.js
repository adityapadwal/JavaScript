// IV. Initialization difference between let, var and const
/*
var: If a var variable is not explicitly initialized, it is automatically assigned the value undefined.

let and const: They are not automatically initialized. If you try to use them before assigning a value, you'll get a ReferenceError.
*/

// var - automatically initialized with undefined
var f;
console.log(f);  // Outputs undefined

// let/const - not automatically initialized
// console.log(g);  // ReferenceError: Cannot access 'g' before initialization
let g = 60;