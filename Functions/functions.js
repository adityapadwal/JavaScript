// Function Statement || Function Declaration
// a();
function a() {
    console.log('a called');
}
// a();

// ********************

// Function Expressions
// b();
var b = function() {
    console.log("b called");
}
// b();

// ********************

// Anonymous Function
// (function() {
//     console.log("Anonymous Function called");
// });
// ();

// Named Function Expression
var c = function namedFe() {
    console.log("Named Function Expression called");
}
c();
// namedFe(); // Reference Error