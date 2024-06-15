function outerFunction(outerVariable) {
    let outerVar = outerVariable;
    
    function innerFunction(innerVariable) {
        let innerVar = innerVariable;
        console.log('Outer Variable:', outerVar);
        console.log('Inner Variable:', innerVar);
    }
    
    return innerFunction;
}

// outerFunction('outer'); // no output as inner function is not called

const newFunction = outerFunction('outside');
newFunction('inside');
