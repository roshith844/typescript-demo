// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)
// Program should have 4 functions named addition(), subtraction(), multiplication() and division()
// Should create a class object and call the appropriate function as user prefers in the main function

const number1 = Number(prompt("Enter a Number"))
const number2 = Number(prompt("Enter Another Number"))
let choice = Number(prompt("Enter Your choice : 1. addition 2. substraction 3. multiplication 4. division"))
class Operations {
     number1: number
     number2: number
     constructor(number1: number , number2: number) {
          this.number1 = number1
          this.number2 = number2
     }
     addition() {
          console.log(this.number1 + this.number2)
     }
     subtraction() {
          console.log(this.number1 - this.number2)
     }
     multiplication() {
          console.log(this.number1 + this.number2)
     }
     division() {
          console.log(this.number1 / this.number2)
     }

}
let operation = new Operations(number1, number2)
if (choice < 1 || choice > 4) {
     console.log("Invalid Entry")
} else if (choice === 1) {
     operation.addition()
} else if (choice === 2) {
     operation.subtraction()
} else if (choice === 3) {
     operation.multiplication()
} else if (choice === 4) {
     operation.division()
}
