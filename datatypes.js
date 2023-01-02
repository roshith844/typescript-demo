"use strict";
// STRING
let lname;
lname = 'john';
let newname = lname.toUpperCase();
console.log(newname);
// lname = 1000; not possible to assign another datatype 
// NUMBER
let age;
age = 25;
age = 25.5;
let dob = '25';
let result = parseInt(dob); // typescript knows the result is int
// BOOLEAN
let isValid = false;
console.log(isValid);
// ARRAY
let empList;
let depList;
// empList = ["jfkjf", 87] // doesn't allow to put another datatype on array
let numList;
numList = [1, 2, 3];
let c = 2 /* Color.blue */;
// TUPLES
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
// ANY
// can use any datatypes ie. no typesafty features
let department;
department = 'IT';
department = 8487;
// USE IN FUNCTIONS
function add(num1, num2, num3 /* Optional parameter */, num4 = 10 /* Required parameter */, ...num5) {
    return num1 + num2;
}
