// Example 1: using normal function
// getName(); // outputs Namaste JavaScript
// console.log(x); // outputs undefined
// console.log(getName); // outputs entire function

// var x = 7;

// function getName() {
//     console.log("Namaste JavaScript");
// }

// Example 2: using arrow function
// getName(); // outputs getName is not a function. Because getName behaves like a variable here
// console.log(x); 
// console.log(getName);

// var x = 7;

// var getName = () => {
//     console.log("Namaste JavaScript");
// }

// Example 3: using function
getName(); // outputs getName is not a function. Because getName behaves like a variable here
console.log(x); 
console.log(getName);

var x = 7;

var getName = function () {
    console.log("Namaste JavaScript");
}
