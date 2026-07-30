// Day 2 - Operators

// Problem 1: Add two numbers and print the result.
let a=2;
let b=3;
console.log(a+b);

// Problem 2: Subtract, multiply, and divide two numbers. Print all results.
let x=1;
let y=10;
console.log(x-y);
console.log(x*y);
console.log(x/y);


// Problem 3: Find the remainder when 15 is divided by 4 using modulus operator.
console.log(15%4);


// Problem 4: Check if a number is even or odd using modulus.
let c=1;
if (c%2===0){console.log("the number is even")}
else {console.log("not an even number")}


// Problem 5: Use comparison operators to check if 10 is greater than 5, and if 3 is equal to "3" (both == and ===).
console.log(10>5);
console.log(3=="3");
console.log(3==="3");

//Problem 6: Use logical operators (&&, ||,!). example age>= 18 && hasLicense.
let age=17;
let haslicense=true;
if (age>=18 && haslicense){
    console.log(true)}else{
        console.log(false)}
        let isholiday=true;
        let isweekend=false;
        if(isholiday||isweekend){
            console.log("today is off")
        }else{console.log("today is work day")}



// Problem 7: Increment a variable using both pre-increment and post-increment. Print the difference.
let i=10;
console.log(++i);
console.log(i++);


// Problem 8: Use the assignment operator += to add 5 to a variable.
let m=6;
m += 5;
console.log(m);