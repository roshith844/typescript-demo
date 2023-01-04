/*
 Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
Program should accept an input from the user and display their grade as follows
Mark - Grade
> 90 A
80-89 B
70-79 C
60-69 D
50-59 E
< 50 Failed


Variable - Data type
Total mark - number
*/
let totalMark = Number(prompt("Enter total Mark percentage"));
if (totalMark > 100 || totalMark < 0) {
     console.log("invalid! Mark percentage should be between 0 and 100");
}else if(totalMark>= 90){
     console.log(" A ")
}
else if(totalMark >= 80){
     console.log(" B ")
}
else if(totalMark >= 70){
     console.log(" C ")
}
else if(totalMark >= 60){
     console.log(" D ")
}
else if(totalMark >= 50){
     console.log(" E ")
}else{
     console.log("failed")
}