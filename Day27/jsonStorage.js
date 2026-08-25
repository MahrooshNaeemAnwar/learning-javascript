// Day 27 - JSON & Local Storage
// Note: Run this in a browser console (localStorage only works in browser).

// Problem 1: Convert a JavaScript object to a JSON string using JSON.stringify().
const user={name:'Mahroosh',age:16,city:'Karachi'};
const jsonString=JSON.stringify(user);
console.log(jsonString);

// Problem 2: Convert a JSON string back to a JavaScript object using JSON.parse().
const jsObject=JSON.parse(jsonString);
console.log(jsObject);

// Problem 3: Store a string in localStorage and retrieve it.

localStorage.setItem('username','Mahroosh');
const name=localStorage.getItem('username');
console.log(name);


// Problem 4: Store an object in localStorage (convert to JSON first) and retrieve it.
localStorage.setItem('user',JSON.stringify(user));
const getobject=JSON.parse(localStorage.getItem('user'));
console.log(getobject);


// Problem 5: Remove a specific item from localStorage.
localStorage.removeItem('username');

// Problem 6: Clear all data from localStorage.
localStorage.clear();

// Problem 7: Create a simple to-do list using localStorage: add, get, and remove tasks.

function addTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ id: Date.now(), text: task, done: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function removeTask(id) {
  const tasks = getTasks().filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTask('Buy groceries');
addTask('Complete homework');
addTask('Read a book');
console.log('All Tasks:', getTasks());

removeTask(getTasks()[0].id);
console.log('After removing first task:', getTasks());


// Problem 8: Store an array of objects in localStorage and retrieve/display it.

const students = [
  { name: 'Mahroosh', age: 16, grade: 'A' },
  { name: 'Rimsha', age: 17, grade: 'A' },
  { name: 'Laiba', age: 18, grade: 'A+' }
];

localStorage.setItem('students', JSON.stringify(students));
const retrievedStudents = JSON.parse(localStorage.getItem('students'));
console.log('Students Array:', retrievedStudents);