function foo() {
    var b = 1;
    function inner() {
        return b+=1;
    }
    return inner;
}
let get_func_inner = foo();

console.log(get_func_inner()); // 2
console.log(get_func_inner()); // 3
console.log(get_func_inner()); // 4


// Closure is created automatically everytime a function is created
// at function creating time