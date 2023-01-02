// Defining types
type User = {
     name : string,
     isActive : boolean
}
function inactiveUser(input: User): User{
     return { name : 'something', isActive: false}
}

type something = {
      nothing : string
}
type somethingElse = {
     anotherNothing: boolean
}

// combaining different object types into one 
type allTypes = User & something & somethingElse 