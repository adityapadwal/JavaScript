// <====.filer()====>
let filterAge = [10, 11, 12, 10, 13, 14, 10];

console.log("Before using filter: ");
console.log(filterAge);

const finalAge = filterAge.filter((name) =>
{
    return name !== 10;
})