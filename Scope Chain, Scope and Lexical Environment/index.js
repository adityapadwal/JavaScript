function a() {
    console.log(b);
    c();
    function c() {
        console.log(b);
    }
}
// var b = 10; // 10, 10
a();
// var b = 10; // undefined, undefined

// ***************************************************
// scope -> where you can access a specific variable or function in our code
// Two  aspects of scope
// 1. what is the scope of a variable ___
// 2. is the variable ___ inside the scope of the function ___

// scope is directly dependent on the lexical environment

function example() {
    var ex = 10;
    anotherExample();
    function anotherExample() {
        console.log(ex);
    }
}
example();

// whenever an execution context is created, a lexical environment is also created
// lexical environment of an EC = (local memory) + (reference to the lexical environment of its parent EC)
// EC = execution context

// Note: lexical environment of GEC(Global Execution Context) is always null

// scope chain is nothing but a chain of all the lexical env and parent references
