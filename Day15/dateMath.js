// Day 15 - Date & Math Objects

// Problem 1: Create a new Date object and print the current date and time.
let now=new Date();
console.log(now);
console.log(now.toLocaleTimeString());

// Problem 2: Get the current year, month, day, hours, minutes, and seconds separately.
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// Problem 3: Create a Date for a specific date (e.g., January 1, 2025).
const date1=new Date("2024-05-15");
console.log(date1);

// Problem 4: Calculate the number of days between two dates.
const start=new Date("2025-03-10");
const end=new Date("2025-04-11");
const diffInMilliSecs= end - start;
const diffDays=diffInMilliSecs/(1000 * 60 * 60 * 24);
console.log(diffDays);

// Problem 5: Use Math.random to generate a random number between 1 and 10.
const result = Math.floor(Math.random() * 10) + 1;
console.log(result); 

// Problem 6: Use Math.floor and Math.ceil to round numbers.
console.log(Math.floor(11.5));
console.log(Math.ceil(6.2));
console.log(Math.round(8.7));

// Problem 7: Find the square root of 144 using Math.sqrt.
console.log(Math.sqrt(144));

// Problem 8: Use Math.max and Math.min to find the largest and smallest numbers from a set.
console.log(Math.max(2,5,8));
console.log(Math.min(9,1,3));

// Problem 9: Generate a random integer between 1 and 100.
const randomInteger = Math.floor(Math.random() * 100) + 1;
console.log(randomInteger);
