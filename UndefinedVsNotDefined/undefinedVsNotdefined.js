var x = 1;

// somthing which is undefined has been alocated memory 
// but on the other hand, something which is undefined has not been alocated memory
// note that undefined is not equal to empty
// people assume that undefined means empty
// rather, undefined is a placeholder which is assigned to a variable to the time being

var a;

console.log(a);

// a = 10;

if(a === undefined) {
    console.log('undefined');
} else {
    console.log('a is not undefined');
}

// note never assign undefined to a variable (bad practise, leads to inconsistencies)