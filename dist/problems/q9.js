"use strict";
/*
Write a program to print the following pattern (hint: use nested loop)
1
1 2
1 2 3
1 2 3 4

*/
let n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(" " + j + " ");
    }
    document.write("<br>");
}
