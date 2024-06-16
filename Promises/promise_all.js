promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 2 failed");
    }, 1000);
});

promise3 = 10;

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Some promise failed");
        console.log("With error: ", error);
    })