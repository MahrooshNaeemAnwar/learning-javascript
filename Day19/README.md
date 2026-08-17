# Day 19 - Spread & Rest Operators

This folder contains `spreadRest.js`, a practice file that explores the **Spread (`...`)** and **Rest (`...`)** operators in JavaScript.

## How to Run

This file runs in **Node.js** (no browser or DOM required).

```bash
node spreadRest.js
```

Each `console.log` prints the output of the corresponding problem to the terminal.

## Topics Covered

### 1. Copying an Array with Spread
- `const copy = [...arr1]` creates a **shallow copy** of `arr1`, so `copy` is a new array and does not reference the original.

### 2. Merging Two Arrays
- `[...x, ...y]` spreads both arrays into a single new array. Both arrays keep their original order.

### 3. Adding Elements Around an Array
- `['mango', ...arr, 'grapes']` inserts `'mango'` at the beginning and `'grapes'` at the end while spreading `arr` in between.

### 4. Copying an Object with Spread
- `const copiedObj = { ...obj }` creates a **shallow copy** of an object.

### 5. Merging Two Objects (Key Conflict)
- When two objects have the same key, the **later object wins**. In `{ ...obj1, ...obj2 }`, `b` becomes `15` because `obj2.b` overrides `obj1.b`.

### 6. Rest Operator in a Function
- `function sum(...nums)` collects all arguments into an array `nums`, then `reduce` adds them together. Rest must be the **last** parameter.

### 7. Destructuring with Rest
- `const [first, ...rest] = array` assigns the first element to `first` and the remaining elements to the `rest` array.

### 8. Spread with Math.max
- `Math.max(...nums)` spreads the array into individual arguments, so `Math.max` can compare them (it would return `NaN` if given an array directly).

## Notes

- Spread and Rest both use the `...` syntax but serve opposite purposes:
  - **Spread** — expands an iterable (array/object) into individual elements.
  - **Rest** — collects individual elements into an array.
- All copies made with spread are **shallow** — nested objects or arrays are still shared by reference.

## Suggested Improvements

- Try nesting an object inside the copied array/object and mutate it to observe shallow-copy behaviour.
- Use rest in a function with a fixed first parameter, e.g. `function product(multiplier, ...nums)`.