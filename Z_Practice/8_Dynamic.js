console.log("Start");

setTimeout(() => {
    console.log("Callback");
}, 2000);

console.log("End");
// Output:
// Start
// End
// (after 2 seconds) Callback
