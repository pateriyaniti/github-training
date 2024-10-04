//type Conversion
let numStr = '123';
let num = Number(numStr);//converts string to number
console.log(num);
let str1 = String(num);//converts number to string
console.log(str1);
console.log(typeof num);//output 'number'

let bool = Boolean(0);
console.log(bool);
let str = String(100);
console.log(200);

//type Coercion
console.log('5' *2);
console.log('5' +2);
