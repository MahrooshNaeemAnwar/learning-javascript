# Day 20 - Destructuring

This folder contains `destructuring.js`, a practice file that explores **destructuring** in JavaScript for arrays, objects, function parameters, and default values.

## How to Run

This file runs in **Node.js** (no browser or DOM required).

```bash
node destructuring.js
```

Each `console.log` prints the output of the corresponding problem to the terminal.

## Topics Covered

### 1. Array Destructuring
- `const [a, b, c] = [1, 2, 3]` assigns array elements to variables `a`, `b`, and `c` in order.

### 2. Swapping Variables
- `[x, y] = [y, x]` swaps two variables in one line without a temporary variable.

### 3. Object Destructuring
- `const { name, age, city } = user` extracts object properties into variables with the same names.

### 4. Renaming Variables (Aliases)
- `const { name: fullName } = user` extracts `name` but stores it in a new variable `fullName`.

### 5. Nested Destructuring
- `const { address: { city: studentCity, zip } } = student` reaches into a nested object to extract `city` (renamed to `studentCity`) and `zip`.

### 6. Destructuring Function Parameters
- `function greet({ name, age })` destructures the object passed as an argument directly inside the parameter list.

### 7. Default Values
- `const { email = 'noemail@example.com' } = user` uses `'noemail@example.com'` when the `email` property does not exist.

### 8. Skipping Array Elements
- `const [first, , third] = ['blue', 'orange', 'green']` skips the second element using an empty slot (`, `).

## Notes

- Destructuring is a convenient way to **unpack** values from arrays or properties from objects into distinct variables.
- Renaming uses the `property: newName` syntax, and defaults are applied only when the value is `undefined`.
- Skipping elements works by leaving a blank space between commas in array destructuring.

## Suggested Improvements

- Add a default value together with renaming, e.g. `const { name: fullName = 'Unknown' } = user`.
- Try swapping more than two variables or destructuring an array of objects inside a loop.