function biggerFunction(){
    let count = 0;
    console.log("Initial value of count is => ", count);

    return function smallerFunction(){
        count += 1;
        console.log("Count value is => ", count);
    }
}

const thirdFunction = biggerFunction();
thirdFunction(); // 1
thirdFunction(); // 2
thirdFunction(); // 3

/*
    Closure is a phenomenon where the inner function has access to the 
    variables declared in the outer function, even if the outer function has finished its execution
    This is because of something called lexical environment

    A clousure is nothing but the function alone with its lexical environment

    Advantages & use-cases of closures
    1. Module patterns
    2. Function currying
    3. Memoize, once (higher order functions)
    4. data hiding and encapsulation

*/