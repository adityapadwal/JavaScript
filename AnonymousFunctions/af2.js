// II. Immediately Invoked Function Expressions (IIFE)

(function() {
    console.log("Hello World");
})

();

var result = (function() {
	var x = 10;
	var y = 20;
	return x + y;
})();

console.log(result); // Output: 30

// IIFE are functions that are executed as soon as they are defined
// Here, function() { console.log('This is an IIFE.'); } 
// is an anonymous function that is immediately invoked.
// They are typically used to create a local scope for variables 
// to prevent them from polluting the global scope.