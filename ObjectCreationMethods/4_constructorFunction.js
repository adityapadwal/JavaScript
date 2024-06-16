// 4. Using a Constructor Function
// A constructor function allows you to create multiple similar objects. 
// This approach is used to define a blueprint for creating objects.

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hi my name is ${this.name} and my age is ${age}`);
    }
}

const obj1 = new Person("Aditya", 22);
const obj2 = new Person("Abhishek", 18);

console.log(Person);
console.log(obj1);
console.log(obj2);

obj1.greet();
obj2.greet();