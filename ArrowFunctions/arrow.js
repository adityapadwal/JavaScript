// Normal Functions (this is a normal function)
function doSomething()
{
    console.log("This is a normal function!");
}
doSomething();

// <=== Imp: Arrow Functions ===>
let myArrow = () => {
    console.log("I am an arrow function!");
}
myArrow();

// <=== arrow functions with parameters ===>
let myArrowParam = (x, y, z) => {
    console.log("I am an arrow function with parameters! ", x, y, z);
}
myArrowParam();

// we can use let, var ansd const for arrow functions 
// but is recommended to use const as it is a standard procedure/ method 