# Day 25 - Error Handling (try, catch, finally, throw)

How to handle errors in JavaScript so the program reacts gracefully instead of crashing.

## File

`errorHandling.js` - 8 problems with solutions.

Run it with:

```bash
node Day25/errorHandling.js
```

## Core Concepts

| Concept | Purpose |
|---|---|
| `try` | Risky code that may throw an error |
| `catch` | Catches the error - program doesn't crash |
| `throw` | Manually throw an error when something is invalid |
| `finally` | Always runs - whether there's an error or not (ideal for cleanup) |

## Problems Overview

### P1: ReferenceError
Access an undeclared variable (`console.log(a)` where `a` doesn't exist at all). The catch block catches it.

> Note: Writing `let a;` does NOT cause a ReferenceError - it just prints `undefined`.

### P2: TypeError
An operation on the wrong type - e.g. `null.name`. The variable exists, but that operation isn't allowed on its type.

### P3: Manual throw
`getNum(num)` throws `new Error(...)` on negative input. Tested with try/catch.

### P4: finally block
`riskyTask(shouldFail)` is called both ways:
- Success case: try -> finally (catch skipped)
- Error case: try -> catch -> finally

"This always runs" prints in both cases - which is why `finally` is ideal for cleanup work.

### P5: Divide by zero
`divide(a, b)` checks `b === 0` and throws an error.

> **Important bug lesson:** `if(b=0)` is an assignment (always falsy) - use `b === 0` for comparison.

### P6: JSON.parse errors
Parsing an invalid JSON string (`'{name:"Mahroosh"}'`) throws a SyntaxError, which gets caught. Valid JSON (`'{"name":"Mahroosh"}'`) parses normally into an object.

### P7: Custom Error Class
```js
class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}
```
- `extends Error` -> inherits message, stack, etc.
- With a custom name, you can check `err instanceof ValidationError` in catch for specific handling
- Example: `setAge()` throws a custom error when age is out of range

### P8: Async + try/catch
With `await`, a Promise rejection behaves exactly like a `throw`:

```js
async function getData(){
    try{
        const result = await failAfter1s();
    }catch(error){
        // rejection lands here
    }
}
```

So a single try/catch handles both sync and async errors.

## Key Takeaways

1. **ReferenceError** = variable doesn't exist | **TypeError** = operation not allowed on that type
2. `=` is assignment, `===` is comparison - be careful in conditions
3. `finally` always runs - ideal for closing resources
4. In async code, `await` + try/catch is how you catch rejections (alternative to `.then().catch()`)
