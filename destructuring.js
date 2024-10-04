let user ={
    id: 1,
    profile: {
        username: 'pateriyaniti',
        email: 'pateriyaniti29@gmail.com'
    }
};
let{
    profile:{username, email}
} = user;
console.log(username);
console.log(email);

//default value
let[a=6,b=12]=[2];

console.log(a);
console.log(b);

let{x=2,y=2}={x:4};
console.log(x);
console.log(y);

//destructuring
function displayUser({name,age})
{ console.log(`Name:${name},Age:${age}`)};
let users ={name:'Bob', age:"30"};
displayUser(users);