// Topic: DOM Manipulation in Js
console.log("Welcome to cwh_2.js");
console.log("DOM Manipulation in Js");
console.log("DOM stands for Document Object Model");

//printing the id-bhidu of the container class 
console.log(bhidu);

// console.log(container);
// class name cannot be given as a Js variable (V.Imp)

//printing the HTML inside the Id: bhidu
console.log(bhidu.innerHTML);

// printing thee text(HTML content) inside the the id: bhidu
console.log(bhidu.innerText);
let tn = document.getElementsByTagName("div");
console.log(tn);

// using document.createElement()
let createdElement = document.createElement('h3');
createdElement.innerText = "This is a created h1 wich is created using document.createElement()";
tn[0].appendChild(createdElement);

//