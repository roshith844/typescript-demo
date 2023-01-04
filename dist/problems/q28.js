"use strict";
// Create a constructor function that satisfies the following conditions:
// The name of the constructor function should be Car.
// It should take three parameters: name, mileage and max_speed.
// Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.
class Car {
    constructor(carName, mileage, max_speed) {
        this.carName = carName;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
}
