# Day 11 - Arrow Functions & Default Parameters

Arrow functions regular functions ka **chota / cleaner** alternative hain. Is day mein humne arrow functions, default parameters, rest parameters, aur `this` ke behavior ke bare mein seekha.

## Topics Covered

- Arrow function syntax (`=>`)
- Implicit return (single line)
- Default parameters
- Rest parameters (`...`)
- `this` ka difference: regular vs arrow function

## Problems & Solutions

### 1. Regular → Arrow conversion
```js
// Regular:
// function add(a, b) { return a + b; }

const add = (a, b) => a + b;
console.log(add(16, 17)); // 33
```
Single-line arrow me `return` aur braces **implicit** (chhota) hota hai.

### 2. Multiplication
```js
const multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6
```

### 3. Positive check
```js
const isPositive = (num) => num > 0;
console.log(isPositive(7));  // true
console.log(isPositive(-8)); // false
```
Expression comparison ek `boolean` return karta hai.

### 4. Default parameter
```js
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("Mahroosh")); // Hello, Mahroosh!
console.log(greet());           // Hello, Guest!
```
Agr argument `undefined` hai to **default value** ("Guest") use hoti hai.

### 5. String length
```js
const stringLength = (str) => str.length;
console.log(stringLength("Mahroosh")); // 8
```

### 6. First element of array
```js
const firstElement = (arr) => arr[0];
console.log(firstElement([9, 10, 11])); // 9
```

### 7. Rest parameters
```js
const sumAll = (...num) => {
    let total = 0;
    for (const n of num) {
        total += n;
    }
    return total;
};
console.log(sumAll(1, 2, 3, 4, 5)); // 15
```
`...num` **kitnay bhi arguments** ko ek array mein jama karta hai.

### 8. `this` - Regular vs Arrow
```js
const user = {
    name: "Mahroosh",
    greet: function () {
        return `Hello, I'm ${this.name}`;
    },
    greetArrow: () => `Hello, I'm ${this.name}`
};
console.log(user.greet());      // Hello, I'm Mahroosh
console.log(user.greetArrow()); // Hello, I'm undefined
```

**Ye sabse important difference hai:**
- **Regular function**: `this` us object ko point karta hai jisne usay call kiya (`user`). Isliye `this.name` → "Mahroosh".
- **Arrow function**: `this` **lexical scope** se aata hai (bahar ki scope). Arrow apna `this` nahi banata, isliye `this.name` → `undefined`.

## Key Takeaways

- Arrow function: `const fn = (params) => expr;`
- Single line = implicit return, `{}` + `return` tab jab **multi-line** ho.
- Default param: `(name = "Guest")`
- Rest param: `(...args)`
- Arrow `this` set nahi karte — object methods mein regular function use karo agar `this` chahiye.