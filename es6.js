//blockscope
if(true){
    let message = 'hello';
    console.log(message);
}

//template Literals
let user ='Niti';
let greeting = `welcome, ${user}!`;
console.log(greeting);

let a= 4;
let b= 20;
console.log(`sum is ${a+b}`);

//Arrow Function
//traditional function
function add(a,b)
{
    return a+b;
}
const sum = (a,b) => a+b; //arrow function start;
console.log(add(5,5));
 
//multiplestatement
const multiple =(a,b) =>{
    let result= a*b;
    return result;
};

//default parameters
function greet(name = 'guest'){
    console.log(`hello, ${name}`);
}
greet();
greet('Bob');

const newFun = (a=5, b=10) => a+b;
newFun()
newFun(100,80)

Filtering numbers =[1,2,3,4,5];
evenNumbers = numbers.filter(num => num % 2===0);
console.log(evenNumbers);