// 04. Arrow function

// Arrow functions do not have their own this context. 
// Instead, they inherit this from the enclosing lexical context (the context in which they are defined).

const obj = {
    name: 'John',
    showThis: function() {
        console.log(this); // logs obj

        const arrowFunc = () => {
            console.log(this); // logs obj
        };
        arrowFunc();
        
        function normalFunction() {
            console.log(this);
        }
        normalFunction(); // logs global object
        normalFunction.call(this) // logs obj
    }
};
obj.showThis(); // Logs obj because arrowFunc inherits `this` from showThis
