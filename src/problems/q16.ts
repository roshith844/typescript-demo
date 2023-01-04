// Write a program to check whether a given number is prime or not
// Program should accept an input from the user and display whether the number is prime or not

let number = Number(prompt("Enter a number : "))

if(checkPrime(number)){
     console.log("Entered Number is Prime Number")
}else{
     console.log("not a Prime")
}


function checkPrime(number: number): boolean{
         for(let i=2; i < number ; i++){
          if(number%i === 0){
               return false;
          }
         }
         return true;
}