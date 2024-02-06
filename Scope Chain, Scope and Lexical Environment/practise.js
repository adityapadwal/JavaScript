function b() {
    console.log(a);
    c();
    function c() {
        console.log(a);
    }
}
var a = 7;
b();