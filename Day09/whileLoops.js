// Day 9 - While & Do-While Loops

// Problem 1: Print numbers from 1 to 10 using a while loop.
let i =1;
while(i<=10){
    console.log(i);
    i++;
}

// Problem 2: Print numbers from 10 to 1 (reverse) using a while loop.
let a=10;
while(a>=1){
    console.log(a);
    a--;
}

// Problem 3: Calculate the sum of numbers from 1 to 100 using a while loop.
let sum=0;
let x=1;
while(x<=100){
    sum+=x;
    x++;
} console.log("Sum of the numbers from 1 to 100 is:"+sum);

// Problem 4: Print the multiplication table of 5 using a while loop.
let num=5;
let j=1;
while(j<=10){
    console.log(num+" "+"*"+" "+j +" "+"="+" "+(num*j))
    j++;
}

// Problem 5: Use a do-while loop to print numbers from 1 to 5.
let b=1;
do {
    console.log(b);
    b++;
}while(b<=5);
// Problem 6: Print all even numbers between 1 and 20 using a while loop.
let num1=1;
while(num1<=20){
    if(num1%2===0){console.log(num1);}
    num1++;
}
// Problem 7: Print all numbers from 1 to 50 that are divisible by 5 using a while loop.
let num2=1;
while(num2<=50){
    if(num2%5===0){console.log(num2);
    }
num2++;
}

// Problem 8: Find the factorial of a number using a while loop.
let number=4;
let factorial=1;
while(number>0){
    factorial*=number;
    number--;
}
console.log("Factorial of the given number is :"+" "+factorial);
// Problem 9: Print the Fibonacci series up to 10 terms using a while loop.
let l=0;
let m=1;
let count=0;
while(count<10){
    console.log(l);
    let nextTerm=l+m;
    l=m;
    m=nextTerm;
    count++;
}