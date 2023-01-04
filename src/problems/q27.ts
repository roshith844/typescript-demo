// Given a variable named my_height, you must throw errors under the following conditions:
// notANumberError- When my_heightis NaN
// HugeHeightError – When my_heightis greater than
// TinyHeight Error - When my_heightis less than

try {
     let userHeight = 0 // input 
     if(isNaN(userHeight)){
          throw new Error('notANumberError')
     } else if(userHeight > 200){
          throw new Error('HugeHeightError')

     }else if(userHeight < 40){
          throw new Error('TinyHeightError')
     }else{
          console.log("Valid")
     } 
} catch (error: any) {
     console.log(error.message)
}
/**Eg: 
             a) Sample Input 0
                       test
             Sample Output 0
                       notANumberError
             b) Sample Input 1
                        250
             Sample Output 1
                        hugeHeightError
             c) Sample Input 2
                        0
             Sample Output 2
                        tinyHeightError
 */