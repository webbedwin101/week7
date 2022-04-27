class Person {
    constructor(name, age){
        this.name = name; 
        this.age = age; 
    }
    getName(){
        return `My name is ${this.name} and I am ${this.age}yrs old`;  
    }
}
const human = new Person('Edwin', 32);
console.log(human.getName()); 

class Employee extends Person {
    constructor(name, age, empId){
        super(name, age);
        this.employeeId = empId; 
    }
    static getCompanyName() {
        return "Web Development Solutions Incorporated"; 
    }
    getEmployeeID() {
        return this.employeeId; 
    }
}
console.log(Employee.getCompanyName()); 
const newHire = new Employee('Edwin', 32, 1008);
console.log(newHire.getEmployeeID());

class Manager extends Employee {
    constructor(name, age, empId, employees){
        super(name, age, empId);
        this.employees = employees;
    }
    newEmployee(empId){
        this.employees.push(empId);
    }
    getEmployees(){
        return this.employees; 
    }
}
const newManager = new Manager('EdwinW', 40, 1, []);
console.log(newManager.getEmployees()); 

class Clerk extends Employee {
    constructor(name, age, empId, supvsrId){
        super(name, age, empId); 
        this.supervisorID = supvsrId; 
    }
    getSupervisorID() {
        return this.supervisorID; 
    }
}
const newSupervisor = new Clerk('JohnD', 50, 5, 105); 
console.log(newSupervisor.getSupervisorID());
//this is like hiring a new supervisor JohnD. You go to the clerk
//and say we just hired a new supervisor JohnD. Here is his information
//The clerk stores it in an object called Clerk. 
//to retrieve JohnD info just check the Clerk obj if you ever need it again. 

let currentID = 1; 
const boss = new Manager ('EdwinW', 45, currentID++, []);
console.log(boss); 

const clerk1 = new Clerk('AmyB', 40, currentID++, boss.getEmployeeID());
console.log(clerk1); 

const clerk2 = new Clerk('BillW', 44, currentID++, boss.getEmployeeID());
console.log(clerk2); 

let bossAndClerk1 = boss.newEmployee({"name": clerk1.getName(), "employeeId": clerk1.getEmployeeID()});
let bossAndClerk2 = boss.newEmployee({"name": clerk2.getName(), "employeeId": clerk2.getEmployeeID()});

console.log(boss); 
console.log(clerk1.getSupervisorID()); 
console.log(clerk2.getSupervisorID()); 
console.log(boss.getEmployees()); 


























