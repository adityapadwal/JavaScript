function x(num) {
    let i = num;

    return (sec) => {
        setTimeout(() => {
            console.log(i);
            i++;
        }, sec)
    }
}

const newFunction = x(1);

for(let i=1; i<=5; i++){
    newFunction(i * 1000);
}
