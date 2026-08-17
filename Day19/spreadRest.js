// Day 19 - Spread & Rest Operators

// Problem 1: Use the spread operator to copy an array into a new array.
const arr1=[1,2,4];
const copy=[...arr1];
console.log(copy);

// Problem 2: Merge two arrays using the spread operator.
const x=[10,11,9];
const y=[10,7,9];
const merged=[...x,...y];
console.log(merged);

// Problem 3: Add elements to the beginning and end of an array using spread.
const arr=['apple','banana','watermelon'];
const newarr=['mango',...arr,'grapes'];
console.log(newarr);

// Problem 4: Use the spread operator to copy an object into a new object.
const obj={name:'Mahroosh',age:16};
const copiedObj={...obj};
console.log(copiedObj);


// Problem 5: Merge two objects using spread. What happens if they have the same key?
const obj1={a:1,b:13};
const obj2={b:15,c:12};
console.log({...obj1,...obj2});

// Problem 6: Use the rest operator in a function to accept any number of arguments and return their sum.
function sum(...nums){
    return nums.reduce((t,n)=> t+n,0);
};
console.log(sum(1,2,3,4));

// Problem 7: Use destructuring with rest to get the first element and the rest of the elements from an array.
const array=[11,2,3,4,10];
const [first,...rest]=array;
console.log([first,...rest]);

// Problem 8: Pass an array to Math.max using the spread operator.
const nums=[1,3,5,9,11];
console.log(Math.max(...nums));