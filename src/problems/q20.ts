// Write a program to print the following pattern using for loop
// 1
// 2	3
// 4	5	6
// 7	8	9	10

let counter = 0;
for(let i=1; i <= 4 ; i++){
     for(let j=1; j<=i; j++){
          counter++
          document.write(counter + "  ")
     }
     document.write("<br>")
}