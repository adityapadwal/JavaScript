// Example 3
// Flattening an array of arrays

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
