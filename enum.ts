// enums, or enumerated types, are data structures of constant length that hold a set of constant values
enum SeatChoice { // default value of elements is 0, 1, 2 ...
  WINDOW = 10,
  LOWER_BIRTH = 30,
  UPPER_BIRTH, // will automatically follow incremened values
}

const userChoice = SeatChoice.WINDOW;
console.log(userChoice);
