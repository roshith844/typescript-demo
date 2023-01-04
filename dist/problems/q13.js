"use strict";
// Write a program to identify whether a string is a palindrome or not
// A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
// Program should accept a string and display whether the string is a palindrome or not
let stringInput = prompt("Enter a string");
if (stringInput !== null) {
    let len = stringInput.length;
    let halflen = Math.floor(len / 2);
    //cuts string into two parts 
    let firsthalf = stringInput.slice(0, halflen);
    let secondhalf = stringInput.slice((len - halflen));
    let revsecondhalf = secondhalf.split("").reverse().join("");
    //compares string
    if (firsthalf === revsecondhalf) {
        console.log("Entered string is Palindrome");
    }
    else {
        console.log("Entered string is Not a Palindrome");
    }
}
