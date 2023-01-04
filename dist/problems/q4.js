"use strict";
/*
Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).
Program should accept an input from the user and output a message as “Passed” or “Failed”

*/
let mark = prompt("enter mark");
if (Number(mark) >= 50 && Number(mark) <= 100) {
    console.log("Passed");
}
else if (Number(mark) < 50 && Number(mark) >= 0) {
    console.log("failed");
}
else {
    console.log("Invalid! marks should be between 0 and 100");
}
