"use strict";
// Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.
// If Arun has a score of
// Written test = 81
// Lab exams = 68
// Assignments = 92
// Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5
//  Write a program to find the grade of a student during his academic year. 
// Program should accept the scores for written test, lab exams and assignments
// Output the grade of a student (using weighted average)
console.log("Enter The Mark Scored ");
let wTest = Number(prompt("Written Test"));
let LabExam = Number(prompt("Lab Exams"));
let assignment = Number(prompt("Assignments"));
let Total = ((wTest * 70) / 100) + ((LabExam * 20) / 100) + ((assignment * 10) / 100);
console.log("Grade of the student is " + Total);
