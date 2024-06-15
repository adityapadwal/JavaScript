/*
In JavaScript, functions are treated as first class citizens.
This means functions can be
1. Assigned to variables,
2. Passed as arguments to other functions,
3. Returned from other functions,
4. Stored in data structures.
*/

// 1. Assigning functions to variables
const greet = function(name) {
    console.log(`Hello ${name}`)
}
// greet("Aditya");

// 2. Passing a function as an argument to another function
function greeterFunction(greet, name){
    greet(name);
}
// greeterFunction(greet, 'Aditya');

// 3. Return function from another function
function createGreeter() {
    function greeting(name){
        console.log(`Hello ${name}`);
    }
    return greeting;
}

const newFunction = createGreeter();
console.log(newFunction);
newFunction('Aditya');

// the ability of functions to be passed as values to another function, 
// the be assigned to variables and the ability to be returned by a function
// is called as first class functions