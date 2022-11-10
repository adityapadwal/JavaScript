console.log("Welcome to file2.js");

//Topic-> Object Destructuring 
const band={
    bandname: "led zepllin",
    famousSong: "stairway to heaven",
}
// const bandname = band.bandname;
// const famousSong = band.famousSong;
// console.log(bandname, famousSong);
const{bandname, famousSong}=band;
console.log(bandname, famousSong);
//Lines 8 to 10 can also be written as 11 to 12 


//Topic-> Objects inside array
const users =[
    {userId:1, firstName:"Aditya"},
    {userId:2, firstName:"Rahul"},
    {userId:3, firstName:"Akash"},
]
console.log(users);
for(let user of users)
{
    console.log(user);
}

// object destructuring in Js 
const padwal ={
    name0: "Aditya",
    name1: "Abhishek"
}
const{name0, name1} = padwal;
console.log("Object Destructuring in JS");
console.log(name0, "and",name1, "are brothers! ");

// array destructuring in JS
console.log("Array destructuring in JS");
let padwalFam = ["Aditya", "Abhishek"];
let [first, second ] = padwalFam;
console.log(first, "and",second, "are brothers! ")