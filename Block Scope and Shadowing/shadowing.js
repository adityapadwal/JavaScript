var a = 100;
{
    var a = 10;
    console.log(a); // outputs 10
}
console.log(a); // outputs 10

// both outputs are 10 because both are pointing to the same memory location. 
// this is because var declarations are function scoped, and here, both are created,
// in the sam memory (global memory)

// But things are different for let
let b = 200;
{
    let b = 20;
    console.log(b); // outputs 20
}
console.log(b); // outputs 200
// this is because outer let declaration is created in script space (separate memory space for let and const)
// and inner let declaration is created in separate/different block space

// Same is the case for const
const c = 300;
{
    const c = 30;
    console.log(c); // outputs 30
}
console.log(c); // outputs 300
// this is because outer const declaration is created in script space (separate memory space for let and const)
// and inner const declaration is created in separate/different block space.
