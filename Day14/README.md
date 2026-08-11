# Day 14 - More Array Methods (`Day14/arrayMethods2.js`)

Today we learned more array methods — `find`, `some`, `every`, `sort` and `includes`. Like Day 13's methods, these also run a callback over each element to produce a result.

## Topics Covered

- `find()` — returns the first element that matches a condition (only the first one)
- `some()` — checks if **any** element matches a condition (`true` / `false`)
- `every()` — checks if **all** elements match a condition (`true` / `false`)
- `sort()` — arranges an array in **ascending** or **alphabetical** order
- `sort()` with objects — sorting by an object property (e.g., `age`)
- `includes()` — checks if an array contains a specific element (`true` / `false`)

## Problems & Solutions

### 1. `find` — first number greater than 10
```js
const nums = [5, 8, 9, 12, 15, 20];
const result = nums.find(num => num > 10);
console.log(result); // 12
```
`find` returns **only the first** matching element (12) and ignores the rest.

### 2. `find` — first string that starts with "A"
```js
const strings = ["Banana", "Grapes", "Apple", "Kiwi"];
const stringA = strings.find(str => str.startsWith("A"));
console.log(stringA); // Apple
```

### 3. `some` — is any number negative?
```js
const numbers = [2, 7, 9, 10, 11, -14];
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // true
```
`some` returns `true` if **at least one** element matches the condition.

### 4. `every` — are all numbers positive?
```js
const nums2 = [13, 14, 15, 16, 17];
const output = nums2.every(num => num > 0);
console.log(output); // true
```
`every` returns `true` only when **all** elements match the condition.

### 5. `sort` — numbers in ascending order
```js
const sortnums2 = nums2.sort((a, b) => a - b);
console.log(sortnums2); // [13, 14, 15, 16, 17]
```
`(a, b) => a - b` gives **ascending** order. Use `(a, b) => b - a` for descending.
Note: `sort` mutates the original array.

### 6. `sort` — strings in alphabetical order
```js
const fruits = ['Mango', 'Banana', 'Apple', 'Strawberry'];
fruits.sort();
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Strawberry']
```
The default `sort()` gives alphabetical order for strings.

### 7. `sort` — sorting objects by a property
```js
const friends = [
  { name: "Rimsha", age: 17 },
  { name: "Laiba", age: 18 },
  { name: "Mahroosh", age: 16 }
];
friends.sort((a, b) => a.age - b.age);
console.log(friends); // Mahroosh(16), Rimsha(17), Laiba(18)
```
`a.age - b.age` compares the ages and orders the objects from smallest to largest age.

### 8. `includes` — does the array contain an element?
```js
const colors = ['Green', 'Blue', 'Red', 'Orange', 'Pink'];
console.log(colors.includes("Green")); // true
console.log(colors.includes("yellow")); // false
```
`includes` does an exact match (case-sensitive) and returns `true` / `false`.

## Key Takeaways

- `find` → returns **only the first** matching element
- `some` → does **any** element match? → `true` / `false`
- `every` → do **all** elements match? → `true` / `false`
- `sort` → orders the array; for numbers you must pass a callback like `(a, b) => a - b`
- `sort` **mutates** the original array (unlike `map`/`filter`, which return a new array)
- `includes` → simple membership check → `true` / `false`

## How to Run

Make sure [Node.js](https://nodejs.org/) is installed, then run:

```bash
node Day14/arrayMethods2.js
```