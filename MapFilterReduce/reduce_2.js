// Example 2
// Maximum of array elements

const numbers = [1, 2, 3, 4, 5];
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
console.log(max); // Output: 5
