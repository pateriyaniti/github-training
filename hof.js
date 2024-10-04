function performOperation(a,b, operation)
{
    return operation(a,b);
}
function add(a,b)
{
    return a+b;
}
function multiply(a,b)
{
    return a*b;
}
console.log(performOperation(5,3,add));
console.log(performOperation(5,3,multiply));