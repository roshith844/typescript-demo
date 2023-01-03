interface User {
      name: string
      age?: number // Optional
      id: number
      email: string
      generateUniqueId: () => string // Should be a string with return value of ype string
     
      
}
// can add values without changing first definition
interface User{
      anotherFunction(): string
}
let user: User = { name: 'nazim', id: 1, email: "example@example.com", generateUniqueId: () => "string",
anotherFunction:  function (){ return "something"} }
export interface Accountant extends User {

}