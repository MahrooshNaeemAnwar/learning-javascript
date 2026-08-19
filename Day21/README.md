# Day 21 - Closures

This folder contains `closures.js`, a practice file that explores **closures** in JavaScript, including function factories, counters, private variables, and unique ID generators.

## How to Run

This file runs in **Node.js** (no browser or DOM required).

```bash
node closures.js
```

Each `console.log` prints the output of the corresponding problem to the terminal.

## Topics Covered

### 1. Function Returning Another Function
- `outer()` returns an inner function that accesses the `message` variable from the outer scope.
- This demonstrates how the inner function keeps a reference to its surrounding scope.

### 2. Counter Using a Closure
- `createCounter()` returns a function that increments and returns a `count` variable.
- The `count` variable persists between calls because the returned function closes over it.

### 3. Greeting Function
- `getName(name)` returns a function that greets with the captured name, e.g. `greetArthur()` prints `Hello! Arthur.`.

### 4. Multiplier (Function Factory)
- `multiplyBy(factor)` returns a function that multiplies any number by `factor`.
- `double` and `triple` are two separate closures, each remembering its own `factor`.

### 5. Private Variable (Encapsulation)
- `createBankAccount()` keeps `balance` private and exposes only `deposit`, `withdraw`, and `getBalance` methods.
- Direct access (`acc.balance`) returns `undefined` because the variable is hidden inside the closure.

### 6. Unique ID Generator
- `createIdGenerator()` returns a function that returns the next ID (`1, 2, 3...`) on every call.

### 7. Closure Explanation
- A closure is a function that remembers the variables from the scope in which it was created, even after the outer function has finished executing.
- Every call to the outer function creates a brand new closure with its own separate copy of those variables.

## Notes

- A closure is formed whenever an inner function references variables from its outer function.
- The inner function keeps a "hidden" reference to its outer scope, so the variables stay alive in memory.
- Closures are the foundation of data privacy (encapsulation) and function factories in JavaScript.

## Suggested Improvements

- Add a `reset()` method to the counter so it can start over from zero.
- Extend the bank account with a transaction history or a transfer method between two accounts.
- Create a `throttle` or `debounce` helper using a closure to understand timers and closures together.
