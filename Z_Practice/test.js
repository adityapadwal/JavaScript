// callbacks
// function fetchData(callback) {
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// function greet() {
//     console.log("Greetings!!!");
// }

// fetchData(greet);

// promises
// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched successfully!");
//     }, 2000);
// });

// fetchData
//     .then((message) => {
//     console.log(message);
//     return ('Thank you!');
//     })
//     .then((greet)=> {
//         console.log(greet);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// async / await

// getMessage = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello!");
//         }, 2000);
//     })
// }

// async function getData() {
//     const message = await getMessage();
//     console.log(message);
// }

// getData();