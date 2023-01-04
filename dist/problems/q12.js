"use strict";
//  Write a program to sort an array in descending order
// Program should accept and array, sort the array values in descending order and display it
let inputArray = [];
let tempForSwap;
let inputArraySize = Number(prompt("enter size of Array "));
console.log("Enter values of array");
for (let i = 0; i < inputArraySize; i++) {
    inputArray[i] = Number(prompt('Enter value'));
}
//sorts
for (let i = 0; i < inputArraySize - 1; i++) {
    for (let j = i + 1; j < inputArraySize; j++) {
        if (inputArray[j] > inputArray[i]) {
            tempForSwap = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = tempForSwap;
        }
    }
}
console.log("the sorted Array is");
for (let i = 0; i < inputArraySize; i++) {
    console.log(inputArray[i]);
}
