# Day 12 - Scope & Hoisting (`Day12/scope.js`)

Topics covered:

- `let` is block-scoped — not accessible outside the block it was declared in
- `var` is function-scoped — accessible outside the block
- Global vs local variables with the same name
- Hoisting — calling a function before its declaration
- Temporal Dead Zone (TDZ) — using a `let` variable before declaring it
- Closure basics — inner functions can access outer function variables

Problems included:

1. Declare a variable inside a function and try to access it outside.
2. Create a global variable and a local variable with the same name and print both inside and outside a function.
3. Use `let` inside a block (if/for) and try to access it outside. Do the same with `var`. What's the difference?
4. Demonstrate hoisting by calling a function before its declaration.
5. Try to use a `let` variable before declaring it. What error do you get? (Temporal Dead Zone)
6. Create a nested function and show how inner functions can access outer function variables (closure basics).
7. Predict what this code prints and why (`var` hoisting inside a function).

## How to Run

Make sure [Node.js](https://nodejs.org/) is installed, then run:

```bash
node Day12/scope.js
```
