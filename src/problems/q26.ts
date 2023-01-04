// Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.
// Output format:
//            The statement to print in the tryblock is:
// Reversed string is : ${my_string}
//            The statement to print in the catchblock is:
// Error : ${err.message}
//            The statement to print in the finally block is:
// Type of my_string is : ${typeof my_string}

let my_string = "1234"
try{
     let revstring = my_string.split('').reverse().join('')
     console.log(`Reversed string is : ${my_string}`) 
}catch(error: any){
     console.log(`Error : ${error.message}`)
}finally{
     console.log(`Type of my_string is : ${typeof my_string}`)
}