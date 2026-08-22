# Day 24 - Async/Await

This folder covers JavaScript **async/await** — a cleaner, synchronous-looking way to work with Promises.

## 📄 File: `asyncAwait.js`

Practice file containing 8 problems demonstrating async/await concepts.

## Topics Covered

### Problem 1: Basic `await`
An async function that waits for a Promise resolving with `"Done!"`.
- Key idea: `await` pauses the function until the Promise settles.

### Problem 2: Error Handling with `try/catch`
Handling a rejected Promise using `try/catch` inside an async function.
- Key idea: rejected Promises behave like thrown errors with `await`.

### Problem 3: Sequential Execution
Fetching multiple Promises one after another using `await`.
- Each task starts only after the previous one finishes.
- Total time = sum of all delays (~4.5s).

### Problem 4: Parallel Execution with `Promise.all`
Running the same tasks in parallel.
- All tasks start together; total time = longest task (~2s).
- Much faster than sequential execution.

### Problem 5: Simulating an API Call
Using a `delay` helper to simulate waiting 1 second before returning user data.

### Problem 6: Random Delay
Waiting for a random delay (1–5 seconds) and printing `"Waited!"`.

### Problem 7: `.then()` vs `async/await`
The same operation written both ways:
```js
// .then()
doubleAfter1s(5).then(value => console.log(value));

// async/await
const value = await doubleAfter1s(5);
```

### Problem 8: Retry Logic
An async function that retries a failing API up to 3 times using a loop with `try/catch`.

## How to Run

```bash
node asyncAwait.js
```

## Key Takeaways

| Concept | Description |
|---------|-------------|
| `async` | Makes a function return a Promise |
| `await` | Waits for a Promise; only usable inside `async` functions |
| `try/catch` | Handles rejected Promises with await |
| `Promise.all` | Runs promises in parallel |
| Sequential vs Parallel | Sequential is slower; parallel saves time |
