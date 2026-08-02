// Day 5 - Switch & Ternary Operator

// Problem 1: Use switch to print the day name based on a number (1=Monday, 2=Tuesday...7=Sunday).
let dayname=6;
switch(dayname){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
            console.log("TUESDAY");
            break;
    case 3:
            console.log("WEDNESDAY");
            break;
    case 4:
            console.log("THURSDAY");
            break;
    case 5:
            console.log("FRIDAY");
            break;                
    case 6:
            console.log("SATURDAY");
            break;
    case 7:
            console.log("SUNDAY");
            break;
}

// Problem 2: Use switch to print the season based on a month number (12,1,2=Winter, 3,4,5=Spring, etc).
let month=7;
switch(month){
    case 1:
        console.log("it's Winter");
        break;
    case 2:
        console.log("it's Winter");
        break;
    case 3:
        console.log("it's Spring");
        break;
    case 4:
        console.log("it's Spring");
        break;
    case 5:
        console.log("it's Spring");
        break;
    case 6:
        console.log("it's Summer");
        break;
    case 7:
        console.log("it's Summer");
        break;
    case 8:
        console.log("it's Summer");
        break;
    case 9:
        console.log("it's Autumn");
        break;
    case 10:
        console.log("it's Autumn");
        break;
    case 11:
        console.log("it's Autumn");
        break;
    case 12:
        console.log("it's Winter");
        break;
}

// Problem 3: Use the ternary operator to check if a number is even or odd.
let x=11;
let result=(x%2===0)? "Even":"Odd";
console.log(result);


// problem 4:use ternary operator to check the maximum of two numbers
let a=67;
let b=40;
let max=(a>b)? a:b;
console.log("maximum number is:"+ max);

// Problem 5: Use ternary to check if a person is eligible to vote.
let age=17;
let y=(age>=18)? "ELIGIBLE TO VOTE":"NOT ELIGIBLE TO VOTE";
console.log(y);


// Problem 6: Write a simple calculator using switch that does +, -, *, / based on an operator.
let num1=3;
let num2=3;
let operator="/";
function simpleCalculator(num1,num2,operator){
    let result;
    switch(operator){
        case "+":
            result=num1+num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case "*":
            result=num1*num2;
            break;
        case "/":
            if(num2===0){
                console.log("cannot divide by zero");
                return;
            }
            result=num1/num2;
            break;
        default:
            console.log("invalid operator");
            return;
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}
simpleCalculator(num1,num2,operator);
//problem 7: use ternary (nested if )to check if a number is positive ,negative or zero
let num=10;
let output=(num>0)? num+" "+"is positive":(num<0)? num+" "+"is negative":"zero";
console.log(output);

