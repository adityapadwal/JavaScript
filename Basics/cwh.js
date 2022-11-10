console.log("Hello ");
console.log("Welcome to Js tutorial by cwh!!!!");
console.log("This is also a good course");
console.warn("This is a warning. It is created using console.warn");
console.error("This is an error. It is created using console.error");
console.assert(4===6);
//console.clear() clears the console
//console.clear();   This command clears the console
// this message appears when we use console.clear()
// console was cleared 


// Topic: Js console API
// Line number: 4, 5, 6.
 
// variables in Js
// 1. numbers 
// 2. Strings 
// 3. Booleans 
// 4. Undefined 
// 5. Null
// There is a difference between null and undefined 

// Data types in Js 
// 1. Primitive data type: number, string, undefined, null, boolean, symbol.
// 2. Reference data type: arrays and objects.

// Arrays in Js
var array = [1,2,3,"Aditya",5];
console.log(array);
// Printing the first value 
console.log("The first elemrnt of the array is: ", array[0]);
// using for loop 
console.log("Using for loop we get, ");
//This only prints the indices of the array
for(i in array)
{
    console.log(i);
}
// This prints the elements of the array 
for(i in array)
{
    console.log(array[i]);
}

// Operators in Js
// Arithmetic Operators
// Assignment Opeartors
// Comparison opeartors
// Logical Operators 

// Functions in Js
// Very important feature of Js
var a = 12;
var b = 1;
function avg()
{
    console.log("The addition of a and b will be: ", a+b);
    return a - b;
}

c = avg();
console.log("The subtraction of a and b is: ", a-b);

//conditionals in Js
// Loops in Js
console.log("Henlo!");

// Array methods 
let myArr=["Aditya", "Is", true, 2, 12.45];
console.log(myArr.length);
// .length();
// .pop();
// .push();
// .unshift();
// .shift();
// .sort();
// .toString();

// String Methods in Js
let myString = "My name is Aditya and this is a string";
console.log(myString.length);
console.log("The index of Aditya in the String is: ", myString.indexOf("Aditya"));
// .length;
// .lastIndexOf();
// .slice();
// .replace();

// remember .indexOf() and .lastIndexOf()
