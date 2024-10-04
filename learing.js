//Map
//E.g. 1= array
const numbers = [1,2,3,4];
const doubled = numbers.map(num => num*2);
console.log(doubled);
 
//e.g 2
let arr=[2,3,5,7];
arr.map(function(element,index,array)
{console.log(this)},80);

//e.g 3
const number=[1,4,9];
const roots = number.map((num) => Math.sqrt(num));
console.log(roots);

//object e.g. 1
const users = [{ name: 'Alice'} , { name: 'Bob'} ,{ name: 'Charlie'}];
const userNames = users.map(user => user.name);
console.log(userNames);

//e.g. 2
const map =new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map);

//string e.g. 1
const numArray = [10,20,40];
const stringArray = numArray.map(num => String(num));
console.log(stringArray);

// e.g. 2
const myArray=[4,7,2,5,6];
const myString=myArray.toString();//toString method returns a string with array values seprated by commas
console.log(myString);

//e.g. 3
const fruits =["banana", "Orange","Apple", "Mango"];
console.log(fruits);

//constant value e.g. 1
const addTen=numbers.map(num=>num+10);
console.log(addTen);

//e.g. 2
const addFive=numbers.map(num=>num+5);
console.log(addFive);

//e.g. 3
const subTwo=numbers.map(num=>num-2);
console.log(subTwo);

//boolean value e.g.1
const isEven=numbers.map(num=>num%2===0);
console.log(isEven);

//e.g. 2
const isOdd=numbers.map(num=>num%3===0);
console.log(isOdd);

//Filter()
//even number e.g. 1
const evenNumbers=numbers.filter(num=>num %2===0);
console.log(evenNumbers);

//object property
const people=[
              {name: "Niti", age: 18 },
              {name: "Shorya", age: 19 },
              {name: "Neelesh", age: 20 }];
const adults=people.filter(person=>person.age>=18);
console.log(adults);

//falsy value for array
const mixedArray= [0, 'hello', false, 42, '', null];
const truthyValues= mixedArray.filter(Boolean);
console.log(truthyValues);

//filtering words
const words =["cat", "elephant", "dog", "tiger"];
const longWords= words.filter(word=>word.length>3);
console.log(longWords);

//greater than a threshold
const greaterThanTwo= numbers.filter(num=>num>2);
console.log(greaterThanTwo);

//Reduce()
//suming anarray
const sum = numbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
console.log(sum);

//maximum value inan array
const max= numbers.reduce((max,current) => current>max? current: max,0);
console.log(max);

//concatenating strings
const names=['Alice', 'Cob', 'Charlie'];
const concatenatedNames= names.reduce((acc,name) =>  acc + ',' + name);
console.log(concatenatedNames);

//flatting an array
const arrayOfArrays =[[1,2],[3,4],[5,6]];
const flattened = arrayOfArrays.reduce((acc,val) => acc.concat(val), []);
console.log(flattened);

//counting occurrences
const items =['apple','banana','apple','orange','banana','apple'];
const itemCount=items.reduce((acc,item) =>
{
    acc[item]=(acc[item] || 0)+1;
    return acc;
} ,{});
console.log(itemCount);

//forEach()
//logging
numbers.forEach(num=>console.log(num));

//modifying
numbers.forEach((num,index,arr)=> arr[index]= num*3);
console.log(numbers);

//suming without returning
let total = 0;
numbers.forEach(num => total += num);
console.log(total);

//forEach
numbers.forEach(function(num){
    console.log(num*2);
})

// logical
let isAdult=true;
let hasTicket = false;

console.log(isAdult && hasTicket);
console.log(isAdult || hasTicket);
console.log(!isAdult);

let isDoughter= true;
let hasMother=false;

console.log(isAdult && hasMother);//&&(and) true,true=true , true,false=false;
console.log(isAdult || hasMother);//||(or) any one is true so element is true;
console.log(!hasTicket);//!(not) true=false, false=true;



//silce and spliced
let num =[1,2,3,4,5];
let sliced = num.slice(1,4);
console.log(sliced);

num.splice(2,1, 10);
console.log(num);

//matrix
let matrix =[[1,2],[3,4],[5,6]];
console.log(matrix[1]);
console.log(matrix[2][0]);

for(let i=0; i<matrix.length; i++)
{
    for(let j=0; j<matrix[i])
}