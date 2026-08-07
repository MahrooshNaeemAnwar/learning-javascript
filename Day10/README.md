# Day 10 - Functions

Functions JavaScript mein code ka reusable block hota hai. Ek baar define karo, jitni baar chaaho call karo. Is day mein humne 8 problems ke zariye functions ki basics seekhi.

## Topics Covered

- Function declaration (`function keyword`)
- Parameters aur arguments
- `return` statement
- Recursion (factorial)
- Built-in `Math` use karna

## Problems & Solutions

### 1. Sum of two numbers
```js
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 11)); // 21
```
Do numbers lekar unka **sum** return karta hai.

### 2. Even / Odd check
```js
function checkEvenorOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenorOdd(50)); // Even
console.log(checkEvenorOdd(9));  // Odd
```
`%` (modulus) se remainder check karta hai. Agar remainder 0 hai to number Even hai.

### 3. Maximum of three numbers
```js
function maxofThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxofThree(9, 10, 11)); // 11
```
`Math.max()` teeno mein se **sabse bara** number return karta hai.

### 4. Greeting message
```js
function greeting(name) {
    return "Hello, " + name + "!";
}
console.log(greeting("Mahroosh")); // Hello, Mahroosh!
```
Parameter le kar greeting message banata hai.

### 5. Factorial (Recursion)
```js
function Factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * Factorial(num - 1);
    }
}
console.log(Factorial(5)); // 120
```
Factorial: `5! = 5 × 4 × 3 × 2 × 1 = 120`. Function **khud ko call karta hai** (recursion). Example: `Factorial(5) = 5 * Factorial(4) = ... = 120`.

### 6. Palindrome check
```js
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```
- `split('')` → string ko array mein todta hai
- `reverse()` → array ulta karta hai
- `join('')` → wapas string banata hai
- Agar original == reversed, to palindrome hai.

### 7. Average of array
```js
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([10, 11, 13, 14, 15])); // 12.6
```
Loop se saare elements ka sum nikala, phir `arr.length` (total count) se divide kar ke average.

### 8. Count vowels
```js
function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i]))
            count++;
    }
    return count;
}
console.log(countVowels("Mahroosh")); // 3
```
String ke har character ko vowels list mein check karta hai (`includes`), match par increment.

## Key Takeaways

- Function = `function name(params) { body }`
- `return` value wapas karta hai, `console.log` sirf print karta hai.
- **Recursion** = function apne aap ko khoti hai (ek stop condition zaroori).
- **Math.max/min**, array methods (`split`, `reverse`, `join`) functional JS mein bohat kaam aate hain.