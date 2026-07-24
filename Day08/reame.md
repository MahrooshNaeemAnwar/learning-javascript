# Day 8 - JavaScript `for` Loop Practice

In this session, I practiced the `for` loop in JavaScript by solving basic programming problems. These exercises helped me understand loop syntax, iteration, conditional statements, and number patterns.

---

## Problem 1: Print Numbers from 1 to 100

### Statement
Write a JavaScript program to print numbers from **1 to 100** using a `for` loop.

### Solution

```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

---

## Problem 2: Print All Even Numbers from 1 to 100 (Method 1)

### Statement
Write a JavaScript program to print all even numbers between **1 and 100** using the modulus (`%`) operator.

### Solution

```javascript
console.log("EVEN NUMBERS FROM 1 TO 100");

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

---

## Problem 3: Print All Even Numbers from 1 to 100 (Method 2)

### Statement
Write a JavaScript program to print all even numbers between **1 and 100** by increasing the loop counter by **2**.

### Solution

```javascript
console.log("EVEN NUMBERS FROM 1 TO 100");

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}
```

---

## Problem 4: Print the Multiplication Table of 7

### Statement
Write a JavaScript program to print the multiplication table of **7**.

### Solution

```javascript
console.log("Table of 7");

let a = 7;

for (let i = 1; i <= 10; i++) {
    console.log("7 * " + i + " = " + a * i);
}
```

---

## Problem 5: Find the Factorial of a Number

### Statement
Write a JavaScript program to find the factorial of a given number using a `for` loop.

### Solution

> **Note:** The following is the original code written during practice.

```javascript
console.log("FACTORIAL OF NUMBER");

let m = 10;

for (let i = 1; i <= m; i++) {
    console.log(m * i);
}
```

---

# Topics Practiced

- `for` loop
- Loop initialization
- Loop condition
- Loop increment
- Conditional statements (`if`)
- Modulus operator (`%`)
- Number patterns
- Multiplication tables
- Basic looping problems

---

# Learning Outcome

After completing these exercises, I learned how to:

- Use the `for` loop effectively.
- Iterate through a range of numbers.
- Print even numbers using different approaches.
- Generate multiplication tables.
- Practice solving beginner-friendly loop problems.