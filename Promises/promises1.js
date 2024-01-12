// Asynchronous JavaScript 

// var name = "Aditya";
// console.log(name);
// name = "Rahul";
// console.log(name);  

// <===================Promise================>
const someEvent = new Promise((resolve, reject) =>{
    var name = "Adityaa";
    if (name === "Aditya")
    {
        resolve(name);
    }
    else
    {
        reject(`Name was not Aditya, Then name was ${name}`);
    }
});

someEvent.then((name) =>{
    console.log("You have entered the correct name ", name);
});
someEvent.catch((err) =>{
    console.log(err);
});
someEvent.finally(() => {
    console.log("Promise finished using finally! ");
});

// resolve is something that should happen if the condition results in success
// reject is something that should happen if the condition results in faliure 
// .then will be called if the function resolves (i.e, success) 
// .catch will be called if the function rejects (i.e, failure) 
// .finally will be called irrespective of the result (true/ false doesn't matter)