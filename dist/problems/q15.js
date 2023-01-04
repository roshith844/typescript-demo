"use strict";
// Write a program to accept an array and display it on the console using functions
// Program should contain 3 functions including main() function
let arrSize = Number(prompt("Enter size of the array"));
mainFunction(arrSize);
//main function
function mainFunction(arrSize) {
    let array = new Array(arrSize);
    array = getArr(array, arrSize);
    displayArr(array, arrSize);
}
//adds elements to arrays from user
function getArr(array, arrSize) {
    console.log("enter array elements");
    for (let i = 0; i < arrSize; i++) {
        array[i] = Number(prompt("enter array element"));
    }
    return array;
}
//displays array
function displayArr(array, arrSize) {
    console.log(array);
}
