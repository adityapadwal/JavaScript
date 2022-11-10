// Topic-> hello world program 
console.log("Hello World!");                    // output to The Console
console.log("Learning deep Js");                // Output to te console 

// Topic-> variables in Js
var aditya = "Hello Aditya! ";          // String data type
console.log(aditya);
aditya = "Hello Abhishek!";
console.log("My changed name is ", aditya)             // + can also be used instead of , 

//Topic-> constants in Js
const a = 1.23;
console.log("The value of the constant is: ", a);
console.log("Hi");
console.log("Aditya");
console.log("Js is damn easy!!!");
console.log("Hello I am learning Js from Harshit's chaannel")
console.log("yep");
console.log("This is the best website ever!!");
var x = "Aditya";
console.log(x[2]);                // i
console.log(x.length);            
console.log(x[x.length]); 
console.log(x[x.length-1]); 

//Topic-> String methods in Js
var l = "   Aditya   ";
console.log("Without using trim: ",l.length);
var m = l.trim();
console.log("After using trim: ",m.length);
let d = 12345;
console.log(typeof d)
d= d + "";
console.log(typeof d)

console.log("Welcome to day 4 ");
console.log("Help me out please!!! ");
console.log("I am in love with Js");

let string1 = "Aditya";
let string2 = "Padwal";
let string3 = string1 + string2;
console.log(string3);
let name = "Aditya";
let add = "Pune";
let temp = "My name is "+ name + " and I live in "+ " Pune";
console.log(temp);

//Topic-> template string in Js
let ab = 22;
let ac = "Aditya";
let ad =`My name is ${ac} and I am  ${ab} years old.`;           // This is template string ` ............ ${variable_name}..........`;
console.log(ad);

//Topic-> second example of template string
let abc = "I love to play football ";
let acd = " I am 21. ";
let abcd = "My name is Aditya. ";
let abcde = `${abcd} ${acd} ${abc}`;
console.log(abcde);

//Topic-> null
let asd = null;
console.log(asd);
console.log(typeof asd);          // typeof null is an object. It is a bug in Js
 
//Topic-> BigINT (Stores larger integer values)
let qwerty = BigInt(123456789876543);
// or
let bigiee = 12323455434567656765456656n;     // we can use either BIgInt or append 'n' at the end of the big number
console.log("Hmm....");

//Topic-> Ternary operators

//Topic->  and operator 
let hj ="Harshit";
let age = 12;
if(age > 18 &&  hj[0]==="H")
{
    console.log("yes");
}
else{
    console.log("No"); 
}

//Topic-> Arrays 
let fruits = ["mango", "banana", "apple", "grapes", "oranges"]
console.log("the data type of the fruits array is: ",typeof fruits);
console.log(Array.isArray(fruits));                                       // Remember

//Topic-> Primitive types
let num1 = 23;
let num2 = num1;
console.log("The value of num 1 is: ", num1);
console.log("The value of num2 is: ", num2);
num1++;
console.log("The value of num 1 is: ", num1);
console.log("The value of num2 is: ", num2);

//Topic-> Reference types


//Topic-> cloning an array 
let arr1 = ["item1", "item2"];
let arr2 = arr1.slice(0);
arr2.push("item3");
console.log(arr2);

let fruitss = ["mango", "apple", "banana", "grapes"];
let fruitss2=[];
for(let i=0; i<fruitss.length; i++)
{
    fruitss2.push(fruitss[i].toUpperCase());
}

console.log(fruitss2);

console.log("For of loop in Js");
//Topic-> for of loop 
const fruit = ["apple", "mango", "banana", "grapes"];
for(let fru of fruit)
{
    console.log(fru);
}

console.log("For in loop in Js");
//Topic->  for in loop 
for(let index in fruit)
{
    console.log(fruit[index]);
}

//Topic-> Array destructuring
const myArray=["value1", "value2", "value3", "value4", "value5"];
let [myvar1, myar2, ...myyArray]=myArray;
console.log(myyArray)

const new1 = ["aditya", "aditya1", "aditya2", "aditya3", "aditya4"];
let [adi1, adi2, ...myadityapadwal]=new1;
console.log(adi1);
console.log(adi2);
console.log(myadityapadwal);

const person={name: "Aditya", name1: "Aditya Padwal"}
console.log(person);
console.log(person.name);
console.log(person.name1);


//Topic-> objects in Js
const object={
    name: "Aditya S. Padwal",
    age: 20,
    height: 5.8,
}
console.log(object.name);
console.log(object["name"]);
object.gender="male";
console.log(object);
console.log("Aditya is now a pro at Js!");
console.log("He knows everything in Js");
console.log("Hoshiyaar hai ye launda");
console.log("Sahi hai ye launda");

for(let key in person)
{
    console.log(key);
}
for(let key in person)
{
    console.log(person[key]);
}
// for(adi in object)
// {
//     console.log(adi);
//     console.log(person[key])
// }
console.log("I am Back after a very long time!");
let adi = "Aditya";
let adiAge = 20;
console.log("Hello, my name is "+ adi +" and I am "+adiAge +" years old");
console.log(`My name is ${adi} and I am ${adiAge} years old!`);
