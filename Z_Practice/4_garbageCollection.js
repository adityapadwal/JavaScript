function createObject() {
    let obj = { name: "JavaScript" };
    return obj;
}
let newObj = createObject();
console.log(newObj);
// After this point, obj created inside createObject is eligible for garbage collection
