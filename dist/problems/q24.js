"use strict";
// Write a menu driven program to calculate the area of a given object.
// Program should contain two classes
// Class 1: MyClass
// Class 2: Area
// Class MyClass should inherit class Area and should contain the following functions
// main()
// circle()
// square()
// rectangle()
// triangle()
// Class Area should contain the following functions to calculate the area of different objects
// circle()
// square()
// rectangle()
// triangle()
class Area {
    circle() {
        let radius = Number(prompt("Enter radius of circle"));
        let area = (Math.PI) * (Math.pow(radius, 2));
        console.log(`Area of circle is ${area}`);
    }
    square() {
        let side = Number(prompt("Enter length"));
        let area = Math.pow(side, 2);
        console.log(`Area of squre is ${area}`);
    }
    rectangle() {
        let length = Number(prompt("Enter length"));
        let width = Number(prompt("Enter width"));
        let area = length * width;
        console.log(`Area of Rectangle is ${area}`);
    }
    triangle() {
        let height = Number(prompt("Enter height"));
        let base = Number(prompt("Enter base"));
        let area = (height * base) / 2;
        console.log(`Area of tringle is ${area}`);
    }
}
class MyClass extends Area {
    main() {
        let choice = Number(prompt("Enter your choice \n 1. circle 2. Square \n 3.Rectangle \n 4. tringle"));
        if (choice === 1) {
            this.circle();
        }
        else if (choice === 2) {
            this.square();
        }
        else if (choice === 3) {
            this.rectangle();
        }
        else if (choice === 4) {
            this.triangle();
        }
        else {
            alert("invalid Entry. Try again");
        }
    }
}
let obj = new MyClass();
obj.main();
