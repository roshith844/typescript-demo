"use strict";
// Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   false if the sum of the number  is odd.
// The myFilter function should return the sum of the array.
// defines callback function
function callback(...myArray) {
    const newArrInput = [...myArray];
    let sum = 0;
    for (let i = 0; i < newArrInput.length; i++) {
        sum += newArrInput[i];
    }
    if (sum % 2 == 0) {
        console.log("even");
        return true;
    }
    else {
        console.log("odd");
        return false;
    }
}
// defines myFilter
function myFilter(myArray, callback) {
    callback(myArray);
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return sum;
}
let inputArr = [1, 2, 3, 4, 5];
console.log(myFilter(inputArr, callback));
