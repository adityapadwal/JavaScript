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