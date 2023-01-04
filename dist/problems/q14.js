"use strict";
// Write a program to add to two dimensional arrays
// Program should accept two 2D arrays and display its sum
let ArraySize = Number(prompt("Enter Size of Arrays"));
// defines arrays
let array1 = new Array(ArraySize);
for (let i = 0; i < ArraySize; i++) {
    array1[i] = new Array(ArraySize);
}
let array2 = new Array(ArraySize);
for (let i = 0; i < ArraySize; i++) {
    array2[i] = new Array(ArraySize);
}
let sum = new Array(ArraySize);
for (let i = 0; i < ArraySize; i++) {
    sum[i] = new Array(ArraySize);
}
// takes input
console.log("enter values to Array 1 : ");
for (let i = 0; i < ArraySize; i++) {
    for (let j = 0; j < ArraySize; j++) {
        array1[i][j] = Number(prompt("enter element"));
    }
}
console.log("enter values to Array 2 : ");
for (let i = 0; i < ArraySize; i++) {
    for (let j = 0; j < ArraySize; j++) {
        array2[i][j] = Number(prompt("enter element"));
    }
}
//sum array1 and array2
for (let i = 0; i < ArraySize; i++) {
    for (let j = 0; j < ArraySize; j++) {
        sum[i][j] = array1[i][j] + array2[i][j];
    }
}
//displays sum
console.table(sum);
