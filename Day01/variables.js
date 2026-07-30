// Day 1 - Variables & Data Types

// Problem 1: Declare a variable using 'let' and assign your name to it. Print it.

let fname="Mahroosh Naeem Anwar";
console.log(fname);

// Problem 2: Declare a constant using 'const' and assign your age. Print it.

const age = 16;
console.log(age);

// Problem 3: Create three variables: one string, one number, and one boolean. Print all three.

let str = "Hello";
let num = 42;
let bool = true;
console.log(str, num, bool);

// Problem 4: Declare a variable without assigning a value. Print it. What do you see?

let undefinedVar;
console.log(undefinedVar);

// Problem 5: Create a variable with 'null' value. Print it.

let nullVar = null;
console.log(nullVar);

// Problem 6: Swap the values of two variables without using a third variable.

let a = 5;
let b = 10;
console.log("Before swap:", a, b);
[a, b] = [b, a];
console.log("After swap:", a, b);

// Problem 7: What is the typeof each of these: "Hello", 42, true, undefined, null
console.log(typeof "Hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);


// Problem 8: Create a variable using 'var' (old way) and print it. Then try to access it before declaration.

console.log(oldWay);

var oldWay="We declare variable with Var";
