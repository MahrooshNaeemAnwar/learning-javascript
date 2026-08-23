// Day 25 - Error Handling (try, catch, finally, throw)

// Problem 1: Use try/catch to handle a ReferenceError (access an undefined variable).
try{
    console.log(a); 
}catch(err){
    console.log('Caught error:',err.message);
}


// Problem 2: Use try/catch to handle a TypeError.
try{
    const user=null;
    console.log(user.name);
}catch(error){
    console.log('Caught error:',error.message);
}
// Problem 3: Use throw to manually throw an error if a number is negative.
function getNum(num){
    if(num<0){
        throw new Error('The number cannot be negative');
    }
    return num;
}

try{
    console.log( getNum(5));
    console.log( getNum(-3));
}catch(error){
    console.log('Caught:', error.message);
}
try{
    console.log(getNum(-7));
}catch(err){
    console.log('Caught:', err.message);
}


// Problem 4: Use finally to print "This always runs" whether there's an error or not.
function riskyTask(shouldFail){
    if(shouldFail){
        throw new Error('Task failed!');
    }
    console.log('P4: Task completed successfully');
}

try{
    riskyTask(false); // no error case
}catch(error){
    console.log('P4 caught:', error.message);
}finally{
    console.log('This always runs');
}

try{
    riskyTask(true); // error case
}catch(error){
    console.log('P4 caught:', error.message);
}finally{
    console.log('This always runs');
}

// Problem 5: Create a function divide(a, b) that throws an error if b is 0.
function divide(a,b){
    if(b===0){
        throw new Error('Cannot divide by 0');
    }else return a/b;
}
console.log(divide(3,4));
try{
    console.log(divide(9,0));
}catch(error){
    console.log('Error caught:', error.message);
}

// Problem 6: Parse JSON using try/catch. Try to parse invalid JSON and catch the error.
try{
    JSON.parse('{name:"Mahroosh"}');
}catch(error){
    console.log(error.message);
}
try{
    const valid = JSON.parse('{"name":"Mahroosh"}');
    console.log('P6 valid parse:', valid);
}catch(error){
    console.log(error.message);
}

// Problem 7: Create a custom error class that extends Error, and throw it in a function.
class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

function setAge(age){
    if(age < 0 || age > 120){
        throw new ValidationError('Age must be between 0 and 120');
    }
    return age;
}

try{
    console.log('P7:', setAge(25));
    console.log('P7:', setAge(150));
}catch(error){
    console.log('P7 caught:', error.name, '-', error.message);
}

// Problem 8: Use try/catch inside an async function with await.
const failAfter1s = () => new Promise((_, reject) => setTimeout(() => reject('API failed!'), 1000));

async function getData(){
    try{
        console.log('P8: fetching...');
        const result = await failAfter1s(); // reject = throw jaisa
        console.log('P8:', result); // ye line kabhi nahi chalegi
    }catch(error){
        console.log('P8 caught:', error);
    }
}
getData();