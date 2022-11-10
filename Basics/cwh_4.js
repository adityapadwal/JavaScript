console.clear();
console.log("Welcome to cwh_4.js");

// Topic: JSON in Js
console.log("Topic: JSON");

let obj = {
    name: "Aditya", 
    length:1, 
    a:{key :  "value"}
}
jso = JSON.stringify(obj);  // now jso is converted into a string
console.log(jso);
parsed = JSON.parse({"name": "Aditya", "length":1, "a":{"key" :  "value"} });
console.log(parsed);