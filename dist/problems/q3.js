"use strict";
/*  Write a program to find the simple interest.
Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

*/
let amount = prompt("Enter Principle Amount");
let rate = prompt("Enter Interest Rate");
let years = prompt("Enter number of years ");
console.log((Number(amount) * Number(rate) * Number(years)) / 100);
