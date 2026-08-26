# Day 29 - ES6 Modules

Practice file for JavaScript **ES6 Modules** — named exports, default exports, re-exports, and utility modules.

> **Note:** Run in browser with `type="module"` in script tag, or use Node with `.mjs` extension.

---

## Files Included

| File | Description |
|------|-------------|
| `modules.mjs` | Main file — imports and runs all problems |
| `math.mjs` | Math utility module — add, subtract, multiply, divide, constants |
| `utility.mjs` | String utility module — capitalize, reverse, toUpperCase, etc. |
| `reExport.mjs` | Re-exports functions from `math.mjs` |

---

## Problems Covered

### Problem 1: Named Exports (Import)
Export `add` and `subtract` functions from `math.mjs` and import them.

```js
import { add, subtract } from './math.mjs';
console.log(add(8, 3));       // 11
console.log(subtract(16, 6)); // 10
```

### Problem 2: Named Exports vs Default Export
Use both named exports and default export from the same file.

```js
import calculatorDescription, { multiply, divide } from './math.mjs';
console.log(multiply(11, 1));  // 11
console.log(divide(20, 2));    // 10
console.log(calculatorDescription()); // "It's a simple math utility module."
```

### Problem 3: Import Default Export with Different Name
Rename a default export while importing.

```js
import calculatorInfo from './math.mjs';
console.log(calculatorInfo()); // "It's a simple math utility module."
```

### Problem 4: Import All Exports Using `* as` Alias
Import everything from a module as a single object.

```js
import * as mathUtils from './math.mjs';
console.log(mathUtils.add(9, 2));      // 11
console.log(mathUtils.multiply(7, 1)); // 7
console.log(mathUtils.divide(63, 7));  // 9
```

### Problem 5: Utility Module with Multiple Exports
Create a `utility.mjs` that exports multiple string utility functions.

```js
import { capitalize, reverse, toUpperCase, toLowerCase, repeat } from './utility.mjs';
console.log(capitalize('hello'));   // Hello
console.log(reverse('hello'));      // olleh
console.log(toUpperCase('hello'));  // HELLO
console.log(toLowerCase('HELLO'));  // hello
console.log(repeat('ha', 3));       // haha
```

### Problem 6: Re-export a Module
Re-export functions from `math.mjs` through `reExport.mjs`.

```js
// reExport.mjs
export { add, subtract, multiply, divide } from './math.mjs';
export { default as calculatorDescription } from './math.mjs';

// modules.mjs
import { add as reAdd, multiply as reMultiply } from './reExport.mjs';
console.log(reAdd(10, 1));       // 11
console.log(reMultiply(10, 1));  // 10
```

### Problem 7: Constants Module
Export constant values like `PI`, `MAX_SIZE`, etc.

```js
import { PI, MAX_SIZE, Avagadro_Number, Electron_Charge } from './math.mjs';
console.log(PI);                // 3.1428
console.log(MAX_SIZE);          // 100
console.log(Avagadro_Number);   // 6.02e+23
console.log(Electron_Charge);   // 1.6e-19
```

---

## Key Concepts

| Concept | Description |
|---------|-------------|
| `export` | Export a function, object, or value from a module |
| `export default` | Export a single value as the default export |
| `import { name }` | Import a specific named export |
| `import name` | Import the default export |
| `import * as alias` | Import all exports as a single object |
| `export { x } from './file'` | Re-export an export from another module |
| `.mjs` extension | Tells Node.js to treat the file as an ES module |

---

## Run

```bash
node Day29/modules.mjs
```
