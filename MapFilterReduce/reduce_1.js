// reduce syntax
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

// Example 1
// Summing of array elements
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);