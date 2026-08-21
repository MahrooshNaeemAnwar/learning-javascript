# Day 23 - Promises

This folder contains `promises.js`, a practice file that explores **Promises** in JavaScript — creating promises, handling success (`then`) and failure (`catch`), chaining, simulating data fetching, running promises in parallel with `Promise.all`, and converting callback-based functions into promise-based functions (**promisification**).

## How to Run

This file runs in **Node.js** (no browser or DOM required).

```bash
node promises.js
```

Each problem logs its result to the terminal. Since all promises use `setTimeout`, the output order can vary between runs (especially Problem 3, which randomly resolves or rejects).

## Topics Covered

### 1. Creating a Promise That Resolves (Problem 1)
- `new Promise((resolve, reject) => { ... })` creates a promise.
- After 1 second, `resolve('Success!')` is called.
- `.then(result => console.log(result))` runs when the promise fulfills, printing `Success!`.
- **Important:** The class name is `Promise` with a capital `P` — JavaScript is case-sensitive, so `new promise` throws `promise is not defined`.

### 2. Handling Rejection with .catch() (Problem 2)
- A promise that calls `reject('Error occurred')` after 1 second.
- `.catch(error => console.log(error))` handles the failure and prints `Error occurred`.
- An unhandled rejection crashes Node.js, so every rejecting promise should have a `.catch()`.

### 3. Random Resolve or Reject — Both Cases Handled (Problem 3)
- Uses `Math.random()` inside a 2-second timer:
  - Greater than `0.5` → `resolve('Won!')`
  - Otherwise → `reject('Lost!')`
- Both outcomes are handled with a **single chained** handler:

```js
p3
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
```

- **Key lesson:** `.then()` and `.catch()` must be part of the *same chain*. Writing them as two separate statements (`p3.then(...); p3.catch(...)`) leaves the promise created by `.then()` without a rejection handler, causing an `UnhandledPromiseRejection` crash when the promise rejects.

### 4. Chaining .then() Calls (Problem 4)
- A promise starts with the value `9`.
- The first `.then()` **transforms** the data: `num * 2` → `18`.
- The second `.then()` **prints** it: `18`.
- Each `.then()` receives whatever value the previous one returned, which keeps asynchronous steps flat instead of nested.

### 5. Simulating Data Fetching (Problem 5)
- `fetchUser()` returns a promise that resolves with `{name: 'Mahroosh', id: 1}` after 1 second.
- Mimics how real APIs work — data arrives later, so a promise represents the future value.
- Consumed with `fetchUser().then(user => console.log(user.name))`.

### 6. Conditional Resolve/Reject Inside a Function (Problem 6)
- `checkNum(num)` returns a promise:
  - `num > 5` → resolves with `` `${num} is greater than 5` ``
  - otherwise → rejects with `` `${num} is not greater than 5` ``
- Tested with both cases: `checkNum(8)` resolves, `checkNum(2)` rejects.
- Shows that the same function can succeed or fail depending on input, and the caller decides handling via `.then()` / `.catch()`.

### 7. Running Promises in Parallel with Promise.all (Problem 7)
- Two tasks start **at the same time**: `task1` finishes in 1s, `task2` in 2s.
- `Promise.all([task1, task2])` waits for both and resolves with an array of results **in the original order**: `[ 'task 1 done', 'task 2 done' ]`.
- If any single promise rejects, the whole `Promise.all` rejects.

### 8. Promisification — Callback to Promise (Problem 8)
- Converts callback-based `setTimeout` into a promise-based helper:

```js
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}

delay(1000).then(() => console.log('Done after 1 sec'));
```

- Instead of passing a plain callback to `setTimeout`, `resolve` itself is passed — when the timer ends, the promise fulfills.
- This pattern wraps any old callback API so it can be used with `.then()` chains or `async/await`.

## Notes

- A **promise** is an object representing the eventual completion (or failure) of an asynchronous operation.
- A promise has three states: **pending**, **fulfilled (resolved)**, and **rejected**. Once settled, its state never changes.
- `.then()` handles success, `.catch()` handles failure, and they are usually **chained on the same promise**.
- Every `.then()` returns a **new promise**, which is what makes chaining possible.
- `Promise.all` runs promises concurrently and collects all results; one rejection fails the whole batch.
- **Promisification** = wrapping a callback-style function so it returns a promise instead.

## Suggested Improvements

- Add a `.finally(() => console.log('Settled'))` to Problem 3 — it runs whether the promise resolves or rejects.
- Try `Promise.race` and `Promise.any` on `task1` and `task2` and compare outputs with `Promise.all`.
- Extend `delay(ms)` into a `waitAndReturn(ms, value)` helper that resolves with a given value.
- Rewrite Problems 1–8 using `async/await` syntax to prepare for Day 24.
