// Normal Functions
function doSomething()
{
    console.log("This is a normal function!");
}
doSomething();

// <==============Imp: Arrow Functions=================>

// Arrow functions with and without parameters
let myVar = () =>{
    console.log("This is an arrow function with no parameters! ");
}
myVar();

let myFun = (x, y, z) => {
    console.log("The three parameters are: ", x, y, z);
}
myFun(12, 13, 14);

// we can use let, var ansd const for arrow functions 
// but is recommended to use const as it is a standard procedure/ method 

//<===============Imp: Ternary Operators=====================>
let myAge = 6;
let myName = "Aditya";
myAge> 10 ? console.log("Age is above 10") : console.log("Age isn't above 10");
//syntax is 
// condition ? true_case : false_case(else);

// <=================== Imp: Objects ==========================>
const person = {
    name: "Aditya",
    age: 21,
    isMarried: false,
}

const Name = person.name;
const Age = person.age;
const IsMarried = person.isMarried;

// The above can be also done (using less LOC) by using object destructuring
// Object Destructuring
const{name, age, isMarried} = person;
console.log(name);
console.log(age);
console.log(isMarried);
 
//spread operator for objects 
const person2 = {...person, name:"Abhishek"};
// Uisng the spread opeartor(...), we have imported all the keys and values 
// from the person object but the name has been changed 
// rest all is the same

//spread opearotoe for arrays 
const myArr1 = ["Aditya", "Rahul", "Virat"];
console.log(myArr1);
const myArr2 = [...myArr1, "Abhishek"];    // Abhishek got appended at the end
console.log(myArr2);

// <============.map() .filter and .reduce()==================>
// .reduce() is not used too much in react

// <====.map()=====>
// the code given below has map with arrow functions!!

let names = ["Rohit", "Rahul", "Virat", "SKY"];
names.map((name) => {
    console.log(name);
})
// Using the above map fuction, wehave accessed the individual values 
// of the array 
// Now if we want to append "The Legend!" at the end of every value in the above array 
// Here's how we can do it!

names.map((name) => {
    console.log(name + " The Legend! ");
})

// <====.filer()====>
let filterAge = [10, 11, 12, 10, 13, 14, 10];

console.log("Before using filter: ");
console.log(filterAge);

const finalAge = filterAge.filter((name) =>
{
    return name !== 10;
})

console.log("After using filter: ");
console.log(finalAge);

//<=========== Imp: Async + Await + Fetch ==========>
// Done in file2.js