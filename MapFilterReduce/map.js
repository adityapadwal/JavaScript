// <====.map()=====>
// the code given below has map with arrow functions!!

let names = ["Rohit", "Rahul", "Virat", "SKY"];
names.map((name) => {
    console.log(name);
})
// Using the above map fuction, wehave accessed the individual values 
// of the array 
// Now if we want to append "The Legend!" at the end of every value in the above array 
// Here's how we can do it!

names.map((name) => {
    console.log(name + " The Legend! ");
})