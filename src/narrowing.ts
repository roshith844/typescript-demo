function detectType(val: number | string){
     if(typeof val === "string"){
          return val.toLowerCase()
     }
     return val + 3
}

//The "in" operator
interface isAdmin{
id : number
isAdmin: true
}
interface isUser{
   name: string
}
function isAdminAccount(account: isAdmin | isUser){
     if("isAdmin" in account){
          return account.isAdmin 
     }
}