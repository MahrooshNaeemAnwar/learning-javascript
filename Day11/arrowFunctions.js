// Day 11 - Arrow Functions & Default Parameters

// Problem 1: Write a regular function that adds two numbers. Then convert it to an arrow function.
function add(a, b) {
    return a + b;
}
console.log(add(16, 17));

const addArrow = (a, b) => a + b;
console.log(addArrow(16, 17));

// Problem 2: Write an arrow function that multiplies two numbers and returns the result.
const multiply = (x, y) => x * y;
console.log(multiply(2, 3));

// Problem 3: Write an arrow function that checks if a number is positive. Return true or false.
const isPositive = (num) => num > 0;
console.log(isPositive(7));
console.log(isPositive(-8));

// Problem 4: Write an arrow function with a default parameter. If no name is given, use "Guest".
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("Mahroosh"));
console.log(greet());

// Problem 5: Write an arrow function that takes a string and returns its length.
const stringLength = (str) => str.length;
console.log(stringLength("Mahroosh"));

// Problem 6: Write an arrow function that takes an array and returns the first element.
const firstElement = (arr) => arr[0];
console.log(firstElement([9, 10, 11]));

// Problem 7: Create an arrow function that uses rest parameters to sum any number of arguments.
const sumAll = (...num) => {
    let total = 0;
    for (const n of num) {
        total += n;
    }
    return total;
};
console.log(sumAll(1, 2, 3, 4, 5));

// Problem 8: Compare the 'this' behavior in a regular function vs an arrow function inside an object method.
const user = {
    name: "Mahroosh",
    greet: function () {
        return `Hello, I'm ${this.name}`;
    },
    greetArrow: () => `Hello, I'm ${this.name}`
};
console.log(user.greet());       // Regular function
console.log(user.greetArrow());  // Arrow function
