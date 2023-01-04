// Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties.Your task is to display the following:
// If the book is unread:
// You still need to read '<book_name>' by <author_name>.
// If the book is read:
// Already read '<book_name>' by <author_name>.
var library = [ 
     {
         title: 'Bill Gates',
         author: 'The Road Ahead',
         readingStatus: true
     },
     {
         title: 'Steve Jobs',
         author: 'Walter Isaacson',
         readingStatus: true
     },
     {
         title: 'Mockingjay: The Final Book of The Hunger Games',
         author: 'Suzanne Collins',
         readingStatus: false
     }
 ];

const len = library.length
for(let i=0; i< library.length; i++){
     if(library[i].readingStatus === false){
          console.log(`You still need to read ${library[i].title} by ${library[i].author}`)
     }else{
          console.log(`Already read ${library[i].title} by ${library[i].author}.`)
     }
}