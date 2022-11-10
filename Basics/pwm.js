console.log("Hello World!");
// onjects in Js
let name = "Aditya";
let age  = 20;

// This is an object!
let person = {
    name : "Aditya",
    Surname : "Padwal",
    Age : 21
}
// Different ways to access the elements of the objects
// 1. Dot notation
// alert(person.name);
// // 2. Bracket notation 
// alert(person["Surname"]);

// //arrays
// let myArray = ["Aditya", 21, "Padwal"];
// console.log(myArray);

// normal function 
function myFunction()
{
    console.log("Hello World!" );
    document.write("This is the function called! ");
}
myFunction();

// Arrow Func
// let myfunction = (x, y, z) => x+y-z;
// var newvalue = myfunction(10, 5, 14);
// console.log(newvalue);

let myfunction = () =>
{
    console.log("HEllo Arrow Functions! ");
    document.write("This is the function called using arrow functions! ");
};
myFunction();
myfunction();
