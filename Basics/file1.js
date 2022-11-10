console.log("Welcome to file1.js");
const person =
{
    name : "Aditya",    //String
    age : 20,           // Number
    gender : "male",    // String
    hobbies : ["Playing sports", "gym"],        // Array
}

// Topic-> computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
    [key1] : value1,          // note that [] is used
    [key2] : value2,
}
console.log(obj);

//Topic-> Spread operator(...)
const array1 = [1,2,3];
const array2 = [5,6,7];

const arr=[...array1, ...array2];
console.log(arr);

//Topic-> Spreading an array
let array3=["aditya"];
console.log(array3);
console.log(..."aditya");

// Topic-> Spread operator in objects(...)
const obj1 = {
    key1: "value1",
    key2: "value2",
}
const obj2 = {
    key1: "valuechanged",
    key3: "value3",
    key4: "value4",
}
const newObject = {...obj1, ...obj2};
console.log(newObject);

//Topic-> spreaded string is stored as a key:value pair
const obj11={..."aditya"};
console.log(obj11);
// here the string aditya is stored as a key value pair as it is an object
const letters={..."abcdefghijklmnopqrstuvwxyz"};
console.log(letters);

