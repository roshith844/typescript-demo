// . Write an object oriented program to store and display the values of a 2D array
// Program should contains 3 functions including the main function
// main()
// Declare an array
// Call function getArray()
// Call function displayArray()
// 		getArray()
// Get values to the array
// 		displayArray()
// Display the array values

class Fun{
     size : number;
     constructor(size: number){  
          this.size= size;
     }
     main(){
          // Declare array
          let array = new Array<number[]>(this.size)
          for(let i=0; i<this.size; i++){
               array[i]= new Array(this.size)
          }
          return array;
     }

     getArray(array: number[][]): number[][]{
          for(let i = 0; i<this.size ; i++){
               for(let j=0; j<this.size; j++){
                    array[i][j] = Number(prompt("Enter value"))
               }
          }
          return array;
     }

     displayArray(array: number[] | number[][]){
          console.log(array)
     }
}
 let newArrSize = Number(prompt("Enter size Of The Array"))
let arr = new Fun(newArrSize)
    let newarr = arr.main()
 let  arrvalues = arr.getArray(newarr)
 arr.displayArray(arrvalues)
