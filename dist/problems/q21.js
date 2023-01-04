"use strict";
// Write a program to multiply the adjacent values of an array and store it in an another array
// Program should accept an array
// Multiply the adjacent values
// Store the result into another array
const givenArray = [];
const newArray = [];
let arraySize = Number(prompt("Enter array size"));
// takes input
console.log("Enter values of Array");
for (let i = 0; i < arraySize; i++) {
    givenArray[i] = Number(prompt("Enter value"));
}
for (let i = 0; i < arraySize - 1; i++) {
    newArray[i] = givenArray[i] * givenArray[i + 1];
}
console.log(newArray);
