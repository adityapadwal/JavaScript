// Higher Order Function
// 1. Takes one or more functions as an argument
// OR
// 2. Returns one or more functions as result

// Higher-order function that takes a function as an argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log); // Output: 0, 1, 2

// Higher-order function that returns a function
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10

const triple = multiplyBy(3);
console.log(triple(5)); // Output: 15
