// Day 10 - Functions

// Problem 1: Write a function that takes two numbers and returns their sum.
function sum(a,b){
    return a+b;
}
console.log(sum(10,11)); 
// Problem 2: Write a function that checks if a number is even or odd. Return "Even" or "Odd".
function checkEvenorOdd(num){
    if (num%2===0){
        return "Even";
    }  else{
        return "Odd";
    }
}console.log(checkEvenorOdd(50));
console.log(checkEvenorOdd(9));
// Problem 3: Write a function that finds the maximum of three numbers.
function maxofThree(a,b,c){
    return Math.max(a,b,c);
}
console.log(maxofThree(9,10,11));

// Problem 4: Write a function that takes a name as a parameter and returns "Hello, [name]!".
function greeting(name){
    return "Hello, " + name + "!";
}console.log(greeting("Mahroosh"));

// Problem 5: Write a function that calculates the factorial of a number.
function Factorial(num){
    if(num===0 || num===1){
        return 1;
    } else{
        return num*Factorial(num-1);
    }   
}
console.log(Factorial(5));

// Problem 6: Write a function that checks if a string is a palindrome (reads same forwards and backwards).
function isPalindrome(str){
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("mahroosh"));

// Problem 7: Write a function that takes an array of numbers and returns the average.
function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

    }
    return sum/arr.length;
}
console.log(average([10,11,13,14,15]));

// Problem 8: Write a function that returns the number of vowels in a string.
function countVowels(str){
    const vowels=["a","e","i","o","u","A","E","I","O","U"];
    let count =0;
    for (let i =0;i<str.length;i++){
        if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Mahroosh"));