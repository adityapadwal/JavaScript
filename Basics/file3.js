console.log("Welcome to file3.js");

//Topic->Functions 
function aditya()
{
    console.log("hello Aditya");
}
var i;
for(i=0; i<5; i++)
{
    aditya();
}

var a=100;
oddEven();
a=1;
oddEven();
function oddEven()
{
    if (a%2===0)
    {
        console.log("Even hai bhai");
    }
    else
    {
        console.log("Odd hai re bhai");
    }
}
//searching an element in an array 
function findTarget(array, target)
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return -1;
}
const myArray=[1,12,3,4,5,6,7,8,9];
var ans = findTarget(myArray, 12);
console.log("The index of 12 is: ", ans);

//JAVASCRIPT DOES NOT SUPPORT FUNCTION OVERLOADING 
console.log("JavaScript does not support Function Overloading");
console.log("Hello Bhidu!!");

