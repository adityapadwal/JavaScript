// Promises are a way of handling asynchronous operations in javascript. 

const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        const randomNumber = Math.random();

        if(randomNumber <= 0.5) {
            resolve(`Number less than or equal to 0.5 ${randomNumber}`);
        } else {
            reject(`Number greater than 0.5 ${randomNumber}`);            
        }
    }, 5000); // Asynchronous operation takes 5 seconds
});

// Handling promises
myPromise
    .then((result) => {
        console.log(result); // Output if the promise is fullfilled
    })
    .catch((error) => {
        console.log(error); // Output if the promise is rejected
    })

for(i=0; i<7; i++)
{
    console.log('Hello, i am ', i);
}