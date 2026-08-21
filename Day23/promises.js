// Day 23 - Promises

// Problem 1: Create a Promise that resolves with "Success!" after 1 second. Use .then() to print it.
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});
p1.then((result) => console.log(result));


// Problem 2: Create a Promise that rejects with "Error occurred" after 1 second. Use .catch() to handle it.
const p2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject('Error occurred');
    }, 1000);
});
p2.catch((error) => console.log(error));

// Problem 3: Create a Promise that randomly resolves or rejects. Handle both cases.
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Won!');
        } else {
            reject('Lost!');
        }
    }, 2000);
});
p3
    .then((message) => console.log(message))
    .catch((err) => console.log(err));

// Problem 4: Chain two .then() calls. First .then() transforms the data, second .then() prints it.
new Promise((resolve) => resolve(9))
    .then((num) => num * 2)
    .then((num) => console.log(num));

// Problem 5: Simulate fetching user data: return a promise that resolves with {name: "Mahroosh", id: 1}.
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Mahroosh', id: 1 });
        }, 1000);
    });
}
fetchUser().then((user) => console.log(user.name));

// Problem 6: Create a function that returns a Promise. The promise resolves if a number is > 5, otherwise rejects.
function checkNum(num) {
    return new Promise((resolve, reject) => {
        if (num > 5) {
            resolve(`${num} is greater than 5`);
        } else {
            reject(`${num} is not greater than 5`);
        }
    });
}
checkNum(8).then(console.log).catch(console.log);
checkNum(2).then(console.log).catch(console.log);

// Problem 7: Use Promise.all to wait for two promises and print both results.
const task1 = new Promise((res) => setTimeout(() => res('task 1 done'), 1000));
const task2 = new Promise((res) => setTimeout(() => res('task 2 done'), 2000));
Promise.all([task1, task2])
    .then((results) => console.log(results))
    .catch((err) => console.log(err));

// Problem 8: Convert a callback-based function (like setTimeout) into a Promise-based function.
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
delay(1000).then(() => console.log('Done after 1 sec'));
