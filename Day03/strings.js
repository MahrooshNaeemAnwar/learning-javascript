// Day 3 - Strings & Template Literals

// Problem 1: Concatenate two strings using the + operator.
let a="hello";
let b="world";
console.log(a+" "+b);

// Problem 2: Use template literals (backticks) to create a sentence: "My name is [name] and I am [age] years old."
let name="Mahroosh";
let age=17;
let output=`My name is ${name} and I am ${age} years old.`;
console.log(output);

// Problem 3: Find the length of the string "JavaScript".
let x="JavaScript";
console.log(x.length);

// Problem 4: Convert the string "hello world" to uppercase.
let str1="hello world";
console.log(str1.toUpperCase());

// Problem 5: Extract the word "World" from the string "Hello World" using slice().
let str5="Hello World";
console.log(str5.slice(6));

// Problem 6: Replace "bad" with "good" in the string "This is a bad day".
let str2="This is a bad day";
console.log(str2.replace("bad","good"));

// Problem 7: Split the string "apple,banana,grape" into an array using split().
let str3="apple,banana,grape";
console.log(str3.split(","));

// Problem 8: Check if the string "JavaScript" contains the word "Script" using includes().
console.log(x.includes("Script"));

