// Object destructuring
let user = {
    id: 1,
    username: 'johndoe',
    email: 'john@example.com',
};
let{ username , email} = user;
console.log(user.username); //'johndoe'
console.log(user.email); //'john@example.com'

// Type Conversion
let numStr = '123';
let num = Number(numStr); //Converts string to number
console.log(typeof num);

let bool = Boolean(0);
let str = String(100);
console.log(bool);
console.log(str);

//type Coercion
console.log('5' *2);
console.log('5'+4);

//precedance
let result = 10+6*4;
let adjustedresult =(10+6)*4;
console.log(result);
console.log(adjustedresult);

//Array
let names=['Niti, Shorya, Anamika, Shivngi'];
names.push('Geeta');
console.log(names);
names.pop();
console.log(names);
let uppernames = names.map(name=> name.toUpperCase());
console.log(uppernames);

const numbers = [1,2,3,4];
const doubled = numbers.map(num => num*2);
console.log(doubled);

num=6+5;
console.log(num)

