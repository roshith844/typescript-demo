"use strict";
// enums, or enumerated types, are data structures of constant length that hold a set of constant values
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["WINDOW"] = 10] = "WINDOW";
    SeatChoice[SeatChoice["LOWER_BIRTH"] = 30] = "LOWER_BIRTH";
    SeatChoice[SeatChoice["UPPER_BIRTH"] = 31] = "UPPER_BIRTH";
})(SeatChoice || (SeatChoice = {}));
const userChoice = SeatChoice.WINDOW;
console.log(userChoice);
