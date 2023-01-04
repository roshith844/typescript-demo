/*
Write a program to print the multiplication table of given numbers.
Accept an input from the user and display its multiplication table

*/
let inputNumber = Number(prompt("Enter a Number "))
for (let i = 1; i <= 10; i++) {
     console.log(i + " X " + inputNumber + " = " + (Number(inputNumber) * i))
}