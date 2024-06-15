console.log(x); // Variable x is in TDZ
let x = 10;
console.log(x);

/*
    Output
    Reference Error: Cannot access 'x' before initialization
*/
// Reason: Hoisting and TDZ
// When you declare a variable using let, the declaration is hoisted to the top of the block, but it is not initialized.
// The variable is in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is encountered.
// During the TDZ, any attempt to access the variable will result in a ReferenceError.

// ********************************************************************************************************************

console.log(a);
var a = 10;
console.log(a);
/*
    Output
    undefined 
    10
*/
// Reason:
// When you declare a variable using var, both the declaration and initialization are 
// hoisted to the top of the function or global scope.
// However, the initialization is hoisted as undefined.


// Link: https://chatgpt.com/share/243f1eee-796f-4503-997d-52d8a1904b4a
