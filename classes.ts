class Employee {
     private id!: number;
     protected name!: string;
     constructor(id : number, name : string) {
          this.id = id
          this.name = name
     }
}
let adhil = new Employee(1,"adhil akbar")
// adhil.id = 1
// adhil.name = "adhil akbar"

console.log(adhil)
