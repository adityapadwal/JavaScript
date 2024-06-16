// 6. Factory Functions
// Factory Functions are functions that return objects every time they are called

// createPersonObject is a factory function
function createPersonObject(name, age) {
    return {
        name: name,
        age: age,
        greet: () => {
            console.log(`Hello, my name is ${name}`);
        }
    }
}

const person1 = createPersonObject("Aditya", 22);
const person2 = createPersonObject("Abhishek", 18);

console.log(person1);
console.log(person2);

person1.greet();
person2.greet();