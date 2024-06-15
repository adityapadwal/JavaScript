// Procedural
function square(x) {
    return x * x;
}
console.log(square(5)); // Output: 25

// Object-oriented
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(4, 5);
console.log(rect.area()); // Output: 20

// Functional
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
