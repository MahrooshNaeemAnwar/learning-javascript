// Day 14 - More Array Methods (find, some, every, sort)

// Problem 1: Use find to get the first number greater than 10 from an array.
const nums=[5,8,9,12,15,20];
const result=nums.find(num=>num>10);
console.log(result);

// Problem 2: Use find to get the first string that starts with "A" from an array.
const strings=["Banana","Grapes","Apple","Kiwi"];
const stringA=strings.find(str=>str.startsWith("A"));
console.log(stringA);

// Problem 3: Use some to check if any number in an array is negative.
const numbers=[2,7,9,10,11,-14];
const hasNegative=numbers.some(num=>num<0);
console.log(hasNegative);

// Problem 4: Use every to check if all numbers in an array are positive.
const nums2=[13,14,15,16,17];
const output=nums2.every(num=>num>0);
console.log(output);

// Problem 5: Use sort to sort an array of numbers in ascending order.
const sortnums2=nums2.sort((a,b)=>a-b);
console.log(sortnums2);

// Problem 6: Use sort to sort an array of strings alphabetically.
const fruits=['Mango','Banana','Apple','Strawberry'];
fruits.sort();
console.log(fruits);

// Problem 7: Use sort to sort an array of objects by a property (e.g., sort by age).
const friends=[
    {name:"Rimsha",age:17},
    {name:"Laiba",age:18},
    {name:"Mahroosh",age:16}
];
friends.sort((a,b)=>a.age - b.age);
console.log(friends);

// Problem 8: Use includes to check if an array contains a specific element.
const colors=['Green','Blue','Red','Orange','Pink'];
console.log(colors.includes("Green"));
console.log(colors.includes("yellow"));
