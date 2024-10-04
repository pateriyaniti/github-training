//Arithmetic
let sum = 10+5;
console.log(sum);
let product = 10*5;
console.log(product);

//eg 2
let sub = 1000-559
console.log(sub);
let pow = 5**2;
console.log(pow);

//Assignment
let a=10;
a +=5;
console.log(a);

//eg 2
let x=550;
x -=10;
console.log(x);

//comparison
let isEqual =(5 == '5');
console.log(isEqual);
let isStrictEqual = (5 ==='5');
console.log(isStrictEqual); 

//eg 2
let isStrictnotEqual = (5 !== '10');
console.log(isStrictnotEqual);//false

//logical
let isAdult = true;
let hasId = false;
let canEnter = isAdult && hasId;//and logical operator;
console.log(canEnter);

//eg 2
let here = isAdult || hasId;//or logical operator;
console.log(here);
let where = !isAdult;//not logical operator;
console.log(where);