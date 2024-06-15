// Pure Function
function add(a, b) {
    return a+b;
}

console.log(add(4, 5));  // 9
console.log(add(4, 5)); // 9
// We get a consistent output

// impure function (because it depends on external state)
let counter=0;
function increment(){
    counter++;
    return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2 (output changes with the same inputs)

// Summary 
// 1. Pure functions have consistent output for the same input
// 2. The output of pure functions is solely dependent on the input
// 3. Does not use / modify any global state or global variable
// 4. No side effects (e.g., no modification of external variables or I/O operations).