const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 finished");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 finished");
    }, 5000);
});

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    })