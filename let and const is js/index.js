// Q. Are let and const declarations hoisted in js?
// Ans. Yes, they are hoisted, but they are hoisted very differently than the var declarations.
// because they are in the TDZ (temporal dead zone) for the time being


console.log(b); // undefined
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // outputs 10
var b = 100;

// What is a TDZ = time since when the let variable is hoisted and till it is initialized some value 
// whenever we try to access a variable which is inside the temporal dead zone, 
// it gives us a reference error