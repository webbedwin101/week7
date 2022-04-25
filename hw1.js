let myVariable = "walking"; 
myVariable = "running"; 
console.log(myVariable)

const myVar2 = 10; 
if (true) {
    var x = "variableX"
}
console.log(x);

if(true){
    let y = "variableY"
}
// console.log(y); 

// myVar2 = 25; 
// console.log(myVar2); 

const myEmptyArr = []; 
myEmptyArr.push(5, 10, 15);
console.log(myEmptyArr); 

const myEmptyObj = {};
myEmptyObj.name = "Edwin";
myEmptyObj.age = 32; 
console.log(myEmptyObj);

console.log(`Hello I am ${myEmptyObj.name}`); 

function greet() {
    let myGreet = `Hello I am ${myEmptyObj.name} and I am ${myEmptyObj.age}`
    console.log(myGreet);
}
greet(); 

const {name, age} = myEmptyObj;
console.log(myEmptyObj)

let arrow1 = () => {
    console.log('hello world')
}
(arrow1)(); 

let arrow2 = (str) => {
    console.log(str);
}
(arrow2)("Hello Earth"); 

let arrow3 = (x, y) => {
    return x + y; 
}
console.log(arrow3(5, 10)); 

setTimeout(()=>{console.log("Practice with Arrows")}, 2000);

// const myEmptyArr = []; 
// myEmptyArr.push(5, 10, 15);
for (const i of myEmptyArr){
    console.log(i); 
}

// const myEmptyObj = {};
// myEmptyObj.name = "Edwin";
// myEmptyObj.age = 32; 
// console.log(myEmptyObj);
var myObj = myEmptyObj; 
for (const prop in myEmptyObj){
    console.log(`myEmptyObj.${prop} = ${obj[prop]}`)
}
//returns error due to myEmptyObj being assign as a const obj with empty values
/* myEmptyObj.name = undefined
   myEmptyObj.age = undefined */ 
var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
}
//returns the properties in the obj as expected 
/* 
obj.a = 1
obj.b = 2
obj.c = 3 */ 