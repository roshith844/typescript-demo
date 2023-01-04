// Write a program to find the number of even numbers in an array
// Program should accept an array and display the number of even numbers contained in that array

let array: number[] = []
let count = 0;
//asks size
let size = Number(prompt("Enter size of array"))
// inputs values of array
console.log("enter values of array")
for (let i = 0; i < size; i++) {
     array[i] = Number( prompt("Enter Element") )
}
//loop to find even number and count
for (let i = 0; i < size; i++) {
     if(array[i] % 2 === 0){
          count++;
     }  
}
console.log("Number of even Numbers in the given array is "+ count)