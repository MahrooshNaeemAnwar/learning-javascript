// Day 22 - Callbacks & Higher Order Functions

// Problem 1: Write a function that takes a callback and calls it. Call it with a function that prints "Hello".
function sayHello(callback){
    callback();
}
sayHello(()=>console.log('Hello'));

// Problem 2: Write a higher-order function that takes an array and a callback. Apply the callback to each element.
function getArray(arr,callback){
    for(let i=0;i<arr.length;i++){
    callback(arr[i]);}
}
getArray([2,4,6,8],n=> console.log(n**2));

// Problem 3: Write a function that takes two numbers and a callback. The callback performs an operation (add, subtract, multiply).
function calculate(a,b,operation){
    return operation (a,b);
}
calculate(3,4 ,(x,y) => console.log(x+y));

// Problem 4: Simulate a setTimeout callback: print "Done!" after 2 seconds.
setTimeout(()=>console.log('Done!'),2000);

// Problem 5: Create a function processArray that takes an array and TWO callbacks: one for even numbers, one for odd numbers.
function processArray(arr,evenCallback,oddCallback){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenCallback(arr[i]);
        }else{
            oddCallback(arr[i]);
        }
    }
}
processArray([1,2,3,4,5], n=>console.log(n,'is even'), n=>console.log(n,'is odd'));

// Problem 6: Write a function filterArray that takes an array and a condition callback. Return new array with elements that pass.
function filterArray(arr,condition){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(condition(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterArray([1,2,3,4,5,6], n=>n%2===0));

// Problem 7: Callback hell simulation: write three nested setTimeout callbacks that print 1, 2, 3 sequentially.
setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);
        },1000);
    },1000);
},1000);