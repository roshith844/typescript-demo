interface User{
      name: string
      age?: number // Optional
      id: number 
      email: string
}
let user : User = {name: 'nazim', id: 1, email: "example@example.com"}
export interface Accountant extends User {

}