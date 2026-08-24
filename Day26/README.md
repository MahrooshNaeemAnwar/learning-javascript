# Day 26 - Classes & OOP (JavaScript)

This folder covers the basics of JavaScript **Classes** and **Object-Oriented Programming (OOP)**. All the code is in `classes.js`.

## How to Run

```bash
node Day26/classes.js
```

## Problems & Solutions

### Problem 1: Person Class
A `Person` class whose constructor takes `name` and `age`, with a `greet()` method that returns an intro message.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
```

### Problem 2: Creating an Instance & Calling greet()
An instance of `Person` is created and its `greet()` method is called.

```js
const person1 = new Person("Mahroosh", 16);
console.log(person1.greet());
```

### Problem 3: Static Method
A **static** method `info()` was added to the `Person` class. Static methods are called directly on the class, not on instances.

```js
static info() {
  return "This is a Person class";
}
console.log(Person.info()); // correct way
// person1.info() ❌ - this will throw an error
```

### Problem 4: Inheritance (extends)
The `Student` class extends `Person` and adds a new property `grade`.

```js
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Problem 6: calls the parent constructor
    this.grade = grade;
  }
}
```

### Problem 5: Method Overriding
The parent's `greet()` method is **overridden** in the `Student` class so the message also includes the grade.

```js
greet() {
  return `Hello, my name is ${this.name}, I am ${this.age} years old and I am in grade ${this.grade}.`;
}
```

### Problem 6: Using super()
`super()` is used inside the `Student` constructor to call the parent (`Person`) constructor — it's required before using `this`.

### Problem 7: Getter & Setter
A `Rectangle` class with getters and setters:

- `get area()` — calculates width * height
- `set width(value)` — validates before setting (must be positive)

```js
const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.width = 20;        // setter runs
console.log(rect.width); // 20
```

### Problem 8: Private Fields (#)
The `BankAccount` class uses a private field `#balance` — it cannot be accessed directly from outside the class. Public methods provide access:

- `deposit(amount)` — adds money to the balance
- `withdraw(amount)` — checks balance before withdrawing
- `getBalance()` — returns the current balance

```js
const account = new BankAccount();
account.deposit(1000);   // New balance: 1000
account.withdraw(300);   // New balance: 700
account.getBalance();    // Current balance: 700
```

## Output

```
Hello, my name is Mahroosh and I am 16 years old.
This is a Person class
Hello, my name is Rimsha, I am 18 years old and I am in grade A.
50
20
Deposited 1000. New balance: 1000
Withdrew 300. New balance: 700
Current balance: 700
```

## Key Concepts

| Concept | Description |
|---|---|
| `class` | A blueprint/template for creating objects |
| `constructor` | A special method that runs automatically when an object is created |
| `static` | A class-level method (not accessible from instances) |
| `extends` | Inheritance — a class inherits properties/methods from another |
| `super()` | Calls the parent class's constructor |
| `get` / `set` | Controlled methods for accessing/assigning properties |
| `#field` | Private field — cannot be accessed directly outside the class |
