# Day 22 - Callbacks & Higher Order Functions

This folder contains `callbacks.js`, a practice file that explores **callbacks** and **higher-order functions** in JavaScript, including passing functions as arguments, applying callbacks to arrays, asynchronous callbacks with `setTimeout`, multi-callback functions, custom filters, and callback hell.

## How to Run

This file runs in **Node.js** (no browser or DOM required).

```bash
node callbacks.js
```

Each `console.log` prints the output of the corresponding problem to the terminal. Note that `setTimeout` output appears **after** the synchronous logs finish.

## Topics Covered

### 1. Basic Callback Invocation
- `sayHello(callback)` takes a callback and simply calls it.
- Called with `() => console.log('Hello')`, which prints `Hello`.

### 2. Higher-Order Function with an Array
- `getArray(arr, callback)` loops through the array and applies the callback to **each element**.
- Passing `n => console.log(n ** 2)` prints the square of each number (`4, 16, 36, 64`).
- This is the same idea behind `forEach`, but built manually.

### 3. Callback Performing an Operation
- `calculate(a, b, operation)` calls `operation(a, b)`.
- The same function can add, subtract, or multiply depending on the callback passed, e.g. `(x, y) => console.log(x + y)` prints `7`.
- The callback's parameter names don't matter — only the **position** of the arguments does.

### 4. Asynchronous Callback with setTimeout
- `setTimeout(() => console.log('Done!'), 2000)` prints `Done!` after 2 seconds.
- This is the first taste of **asynchronous** JavaScript — the timer does not block the rest of the code.

### 5. Multiple Callbacks (Even/Odd)
- `processArray(arr, evenCallback, oddCallback)` accepts **two** callbacks.
- It calls `evenCallback` for even numbers and `oddCallback` for odd numbers, showing that a single function can receive many callbacks.

### 6. Custom Filter (Returning a New Array)
- `filterArray(arr, condition)` checks each element with the condition callback and returns a **new array** with only the elements that pass.
- `n => n % 2 === 0` filters out the odd numbers, returning `[2, 4, 6]`.
- This is the same idea behind `filter()`, but built manually.

### 7. Callback Hell Simulation
- Three nested `setTimeout` callbacks print `1`, then `2`, then `3`, each 1 second apart.
- Nesting callbacks inside callbacks is known as **callback hell** — hard to read and maintain. This sets the stage for **Promises** (Day 23) and `async/await` (Day 24).

## Notes

- A **callback** is a function passed as an argument to another function.
- A **higher-order function** is a function that accepts a function as an argument (or returns one).
- Callbacks make code flexible: the same higher-order function can behave differently based on the callback it receives.
- `setTimeout` callbacks run **asynchronously**, so they execute after all synchronous code completes.
- Nested callbacks (callback hell) become hard to manage as code grows — Promises solve this.

## Suggested Improvements

- Add a `subtract` and `multiply` call to `calculate` to see the same function perform different operations.
- Build a `mapArray` function (like `map()`) that returns a **transformed** new array.
- Try `filterArray` with other conditions, e.g. keep numbers greater than 3.
- Rewrite Problem 7 using separate named functions instead of nested arrows to reduce the "hell" feeling.
