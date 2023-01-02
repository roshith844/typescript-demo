// STRING
let lname : string 
lname = 'john'
let newname = lname.toUpperCase()
console.log(newname)
 // lname = 1000; not possible to assign another datatype 

 // NUMBER
 let age : number;
 age = 25;
 age = 25.5
 let dob = '25';
 let result = parseInt(dob) // typescript knows the result is int

 // BOOLEAN
 let  isValid : boolean = false;
 console.log(isValid)

 // ARRAY
 let empList : string[]
 let depList : Array<string>
 // empList = ["jfkjf", 87] // doesn't allow to put another datatype on array
 let numList : number[]
 numList = [1, 2, 3]

 // ENUM 
 const enum Color {
     res, green, blue
 }
 let c = Color.blue;
 // TUPLES

 let swapNumbs: [firstNumber: number, secondNumber: number]

 function swapNumbers(num1 : number, num2: number)  : [number, number]{
return [num2, num1]
 }

 swapNumbs = swapNumbers(10,20)
 swapNumbs[0]
 swapNumbs[1]

 // ANY
// can use any datatypes ie. no typesafty features
 let department: any;

 department = 'IT'
 department = 8487;

// USE IN FUNCTIONS
function add (num1 : number, num2 : number, num3 ?: number/* Optional parameter */, num4 = 10 /* Required parameter */, ...num5 : number[]) : number // return type
{
return num1 + num2
}