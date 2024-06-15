// VI. TDZ Property difference between let, var and const
/* 
var: var has no temporal dead zone. You can access and log var variables before their declaration without an error. They will log undefined but not error
let and const: They have a temporal dead zone. Trying to access or log them before the declaration results in a ReferenceError.
*/

// var - no temporal dead zone
console.log(j);  // Outputs undefined
var j = 90;

// let/const - temporal dead zone
// console.log(k);  // ReferenceError: Cannot access 'k' before initialization
let k = 100;