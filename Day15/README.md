# Day 15 - Date & Math Objects

## Overview

This folder contains documentation for the `dateMath.js` file, which demonstrates working with JavaScript's built-in **Date** and **Math** objects through a series of practice problems.

## Problems Covered

### 1. Creating a Date Object
Creates a new `Date` object representing the current date and time, logs it to the console, and also prints a human-readable time using `toLocaleTimeString()`.

### 2. Extracting Date Components
Gets the current year, month, date, hours, minutes, and seconds individually using `getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, `getMinutes()`, and `getSeconds()`. Note that `getMonth()` is zero-indexed, so `+1` is added to show the actual month number.

### 3. Creating a Specific Date
Creates a `Date` object for a specific date (e.g., `"2024-05-15"`) by passing a date string to the `Date` constructor.

### 4. Calculating Days Between Two Dates
Computes the difference between two dates (`2025-03-10` and `2025-04-11`) in milliseconds, then converts it to days by dividing by `1000 * 60 * 60 * 24`.

### 5. Random Number Between 1 and 10
Uses `Math.random()` combined with `Math.floor()` to generate a random integer between 1 and 10.

### 6. Rounding Numbers
Demonstrates `Math.floor()` (rounds down), `Math.ceil()` (rounds up), and `Math.round()` (rounds to the nearest integer).

### 7. Square Root
Uses `Math.sqrt(144)` to find the square root of 144.

### 8. Max and Min
Uses `Math.max()` and `Math.min()` to find the largest and smallest values from a set of numbers.

### 9. Random Integer Between 1 and 100
Generates a random integer between 1 and 100 using `Math.random()` and `Math.floor()`.

## Key Concepts

- **Date object**: Used to work with dates and times in JavaScript.
- **Math object**: Provides mathematical constants and functions.
- **Date arithmetic**: Subtracting two `Date` objects gives the difference in milliseconds.
- **Random number generation**: `Math.random()` returns a value between 0 (inclusive) and 1 (exclusive); scaling and flooring it produces integers in a desired range.

## How to Run

```bash
node dateMath.js
```

Run the above command from the `Day15` folder to see the output of all the problems.