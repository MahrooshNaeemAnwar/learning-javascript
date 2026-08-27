# Day 30 - Mini Project: Todo App

A complete Todo App built with plain JavaScript using everything learned in the 30-day course.

## Data Structure

Each todo is an object:

```js
{ id: number, task: string, completed: boolean }
```

Example:

```js
{ id: 1, task: "Practice Maths", completed: true }
```

All todos are stored in the `todoArray` array.

## Functions

| # | Function | Description |
|---|----------|-------------|
| 1 | `addTodo(task)` | Add a new todo (auto-generates a unique id) |
| 2 | `removeTodo(id)` | Remove a todo by its id |
| 3 | `toggleTodo(id)` | Toggle a todo's `completed` status |
| 4 | `updateTodo(id, newTask)` | Update the task text of a todo |
| 5 | `getAllTodos()` | Return all todos |
| 6 | `getCompletedTodos()` | Return only completed todos |
| 7 | `getPendingTodos()` | Return only pending (not completed) todos |
| 8 | `clearCompleted()` | Remove all completed todos |
| 9 | `countTodos()` | Return `{ total, completed, pending }` object |

## Bonus: localStorage Persistence

- Todos are automatically **saved** to `localStorage` after every change via `saveTodos()`.
- On page load, todos are **loaded** back from localStorage, so data survives page reloads.
- Uses `JSON.stringify()` to save and `JSON.parse()` to load.
- Wrapped in `try/catch` so corrupt data falls back to default todos instead of crashing.

Helper function used internally:

```js
function getNextId()
```

Generates a new unique id as `Math.max(...ids) + 1`, preventing duplicate ids even after deletions.

## Running the App

The file needs a browser environment because it uses `localStorage`. Open it inside an HTML page or browser dev tools console.

The test section at the bottom calls every function and prints the results to the console.