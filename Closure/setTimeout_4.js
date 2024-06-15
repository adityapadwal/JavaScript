function x() {
    for(var i=1; i<=5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
// x();

function y() {
    for(var i=1; i<=5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
y();