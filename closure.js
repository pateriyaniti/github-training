function outerFunction(outerVariable)
{
    return function innerFunction(innerVariable)
    {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    };
}
const newFunction= outerFunction('day');
newFunction('night');

function outerFunctions(outerVariable)
{
    return function innerFunctions(innerVariable)
    {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    };
}
const newFunctions= outerFunctions('outside');
newFunctions('inside');