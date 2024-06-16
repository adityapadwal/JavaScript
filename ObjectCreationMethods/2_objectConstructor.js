// 2. Using the Object Constructor
// You can create an object using the Object constructor. 
// This is less common but can be useful in certain scenarios.

const object = new Object();
object.name = "Aditya";
object.age = 22,
// object."address" = Pune; error(use square brackets)
object["address"] = "Pune";
object["fathers name"] = "Santosh";

object.greet = () => {
    console.log(`Hello, I am ${object.name}`);
}

console.log(object);
console.log(object.name);
console.log(object["fathers name"]);
object.greet();