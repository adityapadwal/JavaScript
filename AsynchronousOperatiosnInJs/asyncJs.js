/*
What are Asynchronous operations in Js?
Ans. In JavaScript, asynchronous operations are tasks that can be initiated, but their completion doesn't block the execution of the program. 
Instead of waiting for the operation to finish before moving on, JavaScript continues with other tasks, 
and when the asynchronous operation is completed, a specified callback function is invoked.

In simple words,
Imagine you're making a sandwich. You start by putting bread in the toaster. 
While the toaster is doing its job, you don't just stand there and wait; 
you can do other things like preparing the ingredients for the filling or setting the table. 
In JavaScript, asynchronous operations work similarly. 
When a task takes time (like fetching data from a server), the program doesn't stop and wait; 
it continues with other tasks and comes back to handle the result once the time-consuming operation is complete.
*/

// Callbacks
// Callbacks are functions that are passed as arguments to other functions and are executed later, often after an asynchronous operation.
function fetchData(callback) {
    setTimeout(() => {
        const data = "Async Operation Complete";
        callback(data);
    }, 5000);
};

// handleData is a callback function
function handleData(data) {
    console.log(data);
};

fetchData(handleData);

/*
Callbacks in JavaScript allow you to manage asynchronous operations by specifying a function (in this case, handleData) 
that will be executed once the asynchronous operation (in this case, a simulated delay with setTimeout) is complete. 
This helps in avoiding blocking the program execution and allows you to continue with other tasks while waiting 
for the asynchronous operation to finish.
*/

// Promises:
// Promises provide a more structured way to deal with asynchronous code. 
// They represent the eventual completion or failure of an asynchronous operation.
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Async operation complete!";
        resolve(data);
      }, 1000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data); // Output after 1 second: "Async operation complete!"
    })
    .catch((error) => {
      console.error(error);
    });

// Async-Await
// Async/await is a more recent and concise way to work with asynchronous code, making it look and behave more like synchronous code.
async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Async operation complete!";
        resolve(data);
      }, 1000);
    });
  }
  
  async function handleAsyncOperation() {
    try {
      const data = await fetchData();
      console.log(data); // Output after 1 second: "Async operation complete!"
    } catch (error) {
      console.error(error);
    }
  }
  
  handleAsyncOperation();
  