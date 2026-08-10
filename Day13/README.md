# Day 13 - Array Methods (`Day13/arrayMethods.js`)

Array methods JavaScript mein arrays ke saath kaam karne ka **clean / functional** tarika hain. Is day mein humne `forEach`, `map`, `filter` aur `reduce` seekhe — ye methods har element par loop chala kar naya result dete hain.

## Topics Covered

- `forEach()` — har element par kuch karo (kaam karo), par kuch return nahi
- `map()` — har element ko transform karke **naya array** return karo
- `filter()` — condition match karne wale elements ka **naya array** return karo
- `reduce()` — poori array ko aik single value mein jama karo (sum, max, etc.)
- Method chaining — `map().filter()` ek saath

## Problems & Solutions

### 1. `forEach` — har element print karo
```js
const nums = [9, 10, 11, 13, 14, 15];
nums.forEach(n => console.log(n));
```
`forEach` har element par callback chala dta hai. Ye **kuch return nahi karta**, sirf kaam karta hai.

### 2. `map` — har number double karo
```js
const doubledNums = nums.map(n => n * 2);
console.log(doubledNums); // [18, 20, 22, 26, 28, 30]
```

### 2b. Extra — squares
```js
const squareNums = nums.map(n => n ** 2);
console.log(squareNums); // [81, 100, 121, 169, 196, 225]
```

### 3. `filter` — sirf even numbers
```js
const evenNums = nums.filter(n => n % 2 === 0);
console.log(evenNums); // [10, 14]
```
`filter` sirf un elements ko rakhta hai jinke liye condition `true` hoti hai.

### 4. `reduce` — sum
```js
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 72
```
- `accumulator` result ko jama karta jaata hai
- `0` initial value hai (agar na do to pehla element initial banta hai)

### 5. `map` — strings ko uppercase karo
```js
const names = ['mahroosh', 'rimsha', 'laiba'];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ['MAHROOSH', 'RIMSHA', 'LAIBA']
```

### 6. `filter` — 5 se lambi strings
```js
const longerNames = names.filter(name => name.length > 5);
console.log(longerNames); // ['mahroosh', 'rimsha']
```

### 7. `reduce` — maximum number
```js
const max = nums.reduce((acc, currentValue) => (acc > currentValue ? acc : currentValue), 0);
console.log(max); // 15
```
Har step me bara number `acc` mein rakha jaata hai, is liye end me maximum milta hai.

### 8. Chaining — `map` phir `filter`
```js
const nums2 = [2, 4, 6, 8, 10, 12];
const result = nums2.map(n => n * 2).filter(n => n > 10);
console.log(result); // [12, 16, 20, 24]
```
Step by step: `map` pehle sab double karta hai → `[4, 8, 12, 16, 20, 24]`, phir `filter` sirf > 10 wale rakhta hai → `[12, 16, 20, 24]`.

## Key Takeaways

- `forEach` → kuch return nahi, sirf side-effect
- `map` → naya array, same length, har element transformed
- `filter` → naya array, chhota (ya barabar), sirf matching elements
- `reduce` → single value (sum, product, max, etc.)
- Methods **chain** kar sakte hain: `arr.map(...).filter(...)`
- Sabhi methods original array ko **change nahi karte** — naya result banate hain

## How to Run

Make sure [Node.js](https://nodejs.org/) is installed, then run:

```bash
node Day13/arrayMethods.js
```