function outerFunction(outerVariable) {
    let outerVar = outerVariable;

    function innerFunction(innerVariable) {
        let innerVar = innerVariable;

        console.log("Outer Variable: ", outerVar);
        console.log("Inner Variable: ", innerVar);
    }
    return innerFunction;
}

const newFunction = outerFunction("Hello-Outer");
newFunction("Hello-Inner");
