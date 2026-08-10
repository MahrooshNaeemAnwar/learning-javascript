// Day 13 - Array Methods (map, filter, reduce, forEach)

// Problem 1: Use forEach to print each element of an array.
const nums=[9,10,11,13,14,15];
nums.forEach(n=> console.log(n));
// Problem 2: Use map to create a new array where each number is doubled.
const doubledNums=nums.map(n=>n*2);
console.log(doubledNums);
// Extra problem
const squareNums=nums.map(n=>n**2);
console.log(squareNums);
// Problem 3: Use filter to get only even numbers from an array.
const evenNums=nums.filter(n=>n%2===0);
console.log(evenNums);
// Problem 4: Use reduce to find the sum of all numbers in an array.
const sum=nums.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);

// Problem 5: Use map to convert an array of strings to uppercase.
const names=['mahroosh','rimsha','laiba'];
const upperNames=names.map(name=>name.toUpperCase());
console.log(upperNames);

// Problem 6: Use filter to get all strings longer than 5 characters from an array.
const longerNames=names.filter(name=>name.length>5);
console.log(longerNames);


// Problem 7: Use reduce to find the maximum number in an array.
const max=nums.reduce((acc,currentValue)=>(acc>currentValue ? acc:currentValue),0);
console.log(max);

// Problem 8: Chain map and filter: take an array of numbers, double them, then filter only numbers > 10.
const nums2=[2,4,6,8,10,12];
const result=nums2.map(n=>n*2).filter(n=>n>10);
  console.log(result);
