// Day 4 - Conditionals (if/else)

// Problem 1: Write a program that checks if a number is positive, negative, or zero.
let a=10;
if(a<0){
    console.log("The number is negative")
}else if(a>0){
    console.log("The number is positive")
}else {
    console.log("The number is zero")
}
// Problem 2: Check if a person is eligible to vote (age >= 18). Print "Eligible" or "Not Eligible".
let age=17;
if(age>=18){
    console.log("ELIGIBLE TO VOTE")
}else{
    console.log("NOT ELIGIBLE")
}
// Problem 3: Find the largest of three numbers using if/else.
let x=16;
let y=21;
let z=2;
if(x>=y && x>=z){
    console.log("X IS THE LARGEST NUMBER")
}else if (y>=x && y>=z){
    console.log("Y IS THE LARGEST NUMBER ")
}else{
    console.log("Z IS THE LARGEST NUMBER")
}
// Problem 4: Given a percentage, print the grade: A (>=90), B (>=75), C (>=50), F (<50).
let percentage=92.4;
if (percentage>=90){
    console.log("GRADE A")
}else if(percentage>=75){
    console.log("GRADE B")
}else if(percentage>=50){
    console.log("GRADE C")
}else{
    console.log("FAIL")}
// Problem 5: Check if a year is a leap year or not. (Leap year: divisible by 4 but not by 100, OR divisible by 400)
let year=364;
if((year%4===0 && year%100!==0) || year%400===0){
    console.log("IT IS A LEAP YEAR")
}else{
    console.log("IT IS NOT A LEAP YEAR")
}
// Problem 6: Take a number and check if it is divisible by both 3 and 5.
let num=31;
if(num%3===0 && num%5===0){
    console.log("THE NUMBER IS DIVISIBLE BY 3 AND 5")
}else{
    console.log("THE NUMBER IS NOT DIVISIBLE BY 3 AND 5 ")
}

// Problem 7: Given the time (0-24), print "Good Morning" (<12), "Good Afternoon" (12-17), "Good Evening" (>=17).
let time=23;
if(time<12){
    console.log("good morning")
}else if(time>=12 && time<17){
    console.log("good afternoon")
}else{
    console.log("good evening")
}