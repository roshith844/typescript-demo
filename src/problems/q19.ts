// Income tax is calculated as per the following table 
// Annual Income
// Tax percentage
// Up to 2.5 Lakhs 
// No Tax
// Above 2.5 Lakhs to 5 Lakhs
// 5%
// Above 5 Lakhs to 10 Lakhs
// 20%
// Above 10 Lakhs to 50 Lakhs
// 30%

// Write a program to find out the income tax amount of a person.
// Program should accept annual income of a person
// Output the amount of tax he has to pay

let income = Number(prompt("Enter Anual Income"))
if(income > 1000000){
     console.log("Your Tax amount is :  " + (income * (30/100)))
}else if(income > 500000){
     console.log("Your Tax amount " + (income * (20/100)))
}else if(income >250000){
     console.log("Your Tax amount " + (income * (5/100)))
}else{
     console.log("You have No Tax")
}