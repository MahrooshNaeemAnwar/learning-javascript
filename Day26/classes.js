// Day 26 - Classes & OOP

// Problem 1: Create a class "Person" with a constructor that takes name and age. Add a method greet().
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Problem 3: Add a static method to the Person class that returns "This is a Person class".
  static info() {
    return "This is a Person class";
  }
}

// Problem 2: Create an instance of Person and call the greet method.
const person1 = new Person("Mahroosh", 16);
console.log(person1.greet());

console.log(Person.info());

// Problem 4: Create a class "Student" that extends "Person". Add a property "grade".
class Student extends Person {
  constructor(name, age, grade) {
    // Problem 6: Use super() in the Student constructor to call the parent constructor.
    super(name, age);
    this.grade = grade;
  }

  // Problem 5: Override the greet method in Student to include the grade.
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I am in grade ${this.grade}.`;
  }
}

const student1 = new Student("Rimsha", 18, "A");
console.log(student1.greet());

// Problem 7: Create getter and setter methods for a property in a class.
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be positive");
    }
  }

  get width() {
    return this._width;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.width = 20;        // uses setter
console.log(rect.width); // 20

// Problem 8: Create a class with private fields (using #) and methods to access them.
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited ${amount}. New balance: ${this.#balance}`;
    }
    return "Invalid deposit amount";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrew ${amount}. New balance: ${this.#balance}`;
    }
    return "Insufficient balance or invalid amount";
  }

  getBalance() {
    return `Current balance: ${this.#balance}`;
  }
}

const account = new BankAccount();
console.log(account.deposit(1000));
console.log(account.withdraw(300));
console.log(account.getBalance());
