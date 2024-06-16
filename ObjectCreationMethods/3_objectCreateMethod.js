// 3. Using the Object.create Method
// The Object.create method creates a new object with the specified prototype object and properties. 
// This is particularly useful for setting up inheritance.

const proto = {
    name: "Aditya",
    greet: function () {
        console.log(`Hello ${obj.name}`);
    }
};

console.log(proto);
const obj = Object.create(proto);
console.log(obj);

obj.new_name = "Abhishek";
obj.new_greet = function () {
    console.log(`Hello ${obj.new_name}`);
}
console.log(obj);

console.log(obj.new_name);
obj.greet();