# Day 27 - JSON & Local Storage

> **Note:** This code runs in the browser console. `localStorage` only works in browsers.

## Topics Covered

- `JSON.stringify()` — Convert JS object to JSON string
- `JSON.parse()` — Convert JSON string back to JS object
- `localStorage.setItem()` — Store data
- `localStorage.getItem()` — Retrieve data
- `localStorage.removeItem()` — Remove a specific item
- `localStorage.clear()` — Clear all data

---

## Problems & Solutions

### Problem 1: Convert JS Object to JSON String
```js
const user = { name: 'Mahroosh', age: 16, city: 'Karachi' };
const jsonString = JSON.stringify(user);
console.log(jsonString);
// Output: {"name":"Mahroosh","age":16,"city":"Karachi"}
```

### Problem 2: Convert JSON String back to JS Object
```js
const jsObject = JSON.parse(jsonString);
console.log(jsObject);
// Output: { name: 'Mahroosh', age: 16, city: 'Karachi' }
```

### Problem 3: Store and Retrieve a String
```js
localStorage.setItem('username', 'Mahroosh');
const name = localStorage.getItem('username');
console.log(name);
// Output: Mahroosh
```

### Problem 4: Store and Retrieve an Object
```js
localStorage.setItem('user', JSON.stringify(user));
const getobject = JSON.parse(localStorage.getItem('user'));
console.log(getobject);
// Output: { name: 'Mahroosh', age: 16, city: 'Karachi' }
```

### Problem 5: Remove a Specific Item
```js
localStorage.removeItem('username');
```

### Problem 6: Clear All Data
```js
localStorage.clear();
```

### Problem 7: To-Do List using localStorage
Three functions to manage tasks:

| Function | Purpose |
|---|---|
| `addTask(task)` | Adds a task with unique id and `done: false` |
| `getTasks()` | Retrieves all tasks from localStorage |
| `removeTask(id)` | Removes a task by its id |

```js
addTask('Buy groceries');
addTask('Complete homework');
addTask('Read a book');
console.log(getTasks());

removeTask(getTasks()[0].id);
console.log(getTasks());
```

### Problem 8: Store and Retrieve an Array of Objects
```js
const students = [
  { name: 'Mahroosh', age: 16, grade: 'A' },
  { name: 'Rimsha', age: 17, grade: 'A' },
  { name: 'Laiba', age: 18, grade: 'A+' }
];

localStorage.setItem('students', JSON.stringify(students));
const retrievedStudents = JSON.parse(localStorage.getItem('students'));
console.log('Students Array:', retrievedStudents);
```

---

## How to Run

1. Open any browser
2. Right-click > Inspect > Console tab
3. Copy-paste the code from `jsonStorage.js`
4. Press Enter
