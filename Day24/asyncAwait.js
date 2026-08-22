// Day 24 - Async/Await

// Problem 1: Write an async function that uses await to wait for a Promise that resolves with "Done!".
const donePromise = new Promise(resolve => resolve("Done!"));

async function waitForDone() {
  const result = await donePromise;
  console.log("P1:", result);
}
waitForDone();

// Problem 2: Write an async function that uses try/catch to handle a rejected Promise.
function failingPromise() {
  return Promise.reject("Something went wrong!");
}

async function handleError() {
  try {
    const result = await failingPromise();
    console.log(result);
  } catch (error) {
    console.log("P2 caught:", error);
  }
}
handleError();

// Problem 3: Write an async function that fetches multiple promises sequentially using await.
function task(name, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${name} done!`), ms);
  });
}

async function runSequentially() {
  console.time("P3 sequential");
  const r1 = await task("Task 1", 1000);
  console.log("P3:", r1);
  const r2 = await task("Task 2", 2000);
  console.log("P3:", r2);
  const r3 = await task("Task 3", 1500);
  console.log("P3:", r3);
  console.timeEnd("P3 sequential");
}
runSequentially();

// Problem 4: Use Promise.all with await to fetch multiple promises in parallel.
async function runInParallel() {
  console.time("P4 parallel");
  const results = await Promise.all([
    task("Task 1", 1000),
    task("Task 2", 2000),
    task("Task 3", 1500)
  ]);
  console.log("P4:", results);
  console.timeEnd("P4 parallel");
}
runInParallel();

// Problem 5: Simulate an API call using async/await: wait 1 second, then return user data.
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getUser() {
  await delay(1000);
  return { id: 1, name: "Mahroosh", email: "mahroosh@example.com" };
}

async function fetchUser() {
  const user = await getUser();
  console.log("P5 user:", user);
}
fetchUser();

// Problem 6: Write a function that uses async/await to wait for a random delay (1-5 seconds) and then prints "Waited!".
function randomDelay() {
  const ms = Math.floor(Math.random() * 4000) + 1000;
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

async function waitRandom() {
  const ms = await randomDelay();
  console.log(`P6 waited ${ms}ms`);
  console.log("Waited!");
}
waitRandom();

// Problem 7: Compare the same operation done with .then() and with async/await.
function doubleAfter1s(num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num * 2), 1000);
  });
}

doubleAfter1s(5).then(value => console.log("P7 .then():", value));

async function doubleAsync() {
  const value = await doubleAfter1s(5);
  console.log("P7 async/await:", value);
}
doubleAsync();

// Problem 8: Create an async function that retries a failed promise up to 3 times.
let attemptCount = 0;

function unreliableApi() {
  attemptCount++;
  if (attemptCount < 3) {
    return Promise.reject(`Attempt ${attemptCount} failed`);
  }
  return Promise.resolve("Success on attempt 3!");
}

async function retryUpTo3(fn, maxRetries = 3) {
  let lastError;
  for (let i = 1; i <= maxRetries; i++) {
    try {
      const result = await fn();
      console.log(`P8 succeeded after ${i} attempt(s):`, result);
      return result;
    } catch (error) {
      lastError = error;
      console.log(`P8 ${i}/${maxRetries} attempts failed:`, error);
    }
  }
  throw lastError;
}

retryUpTo3(unreliableApi).catch(err => console.log("P8 final failure:", err));
