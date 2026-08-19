// Day 21 - Closures

// Problem 1: Create a function that returns another function. The inner function should access a variable from the outer function.
function outer(){
    let message='Hello from outer.';
    function inner(){
        return message;
    }
    return inner;
}
const getMessage=outer();
console.log(getMessage());

// Problem 2: Create a counter using a closure. Each call to the returned function should increment the count.
function createCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Problem 3: Create a function that takes a name and returns a function that greets with that name.
function getName(name){
    return function greet(){
        return `Hello! ${name}.`
    };
};
const greetArthur=getName('Arthur');
console.log(greetArthur());

// Problem 4: Create a multiplier function. multiplyBy(2) should return a function that doubles any number passed to it.
function multiplyBy(factor){
    return function(number){
        return number * factor;
    };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(3));
console.log(triple(11));

// Problem 5: Create a private variable using a closure (a variable that can only be modified through specific methods).
function createBankAccount(){
    let balance=100;
    return {
        deposit(amount){
            balance += amount;
        },withdraw(amount){
            if(amount<=balance) balance -=amount;
            else console.log('Insufficient amount');
        },
        getBalance(){
            return balance;
        },
    };
}
const acc=createBankAccount();
acc.deposit(200);
acc.withdraw(150);
console.log(acc.getBalance());
console.log(acc.balance);

// Problem 6: Create a function that generates unique IDs. Each call returns the next ID (1, 2, 3...).
function createIdGenerator(){
    let id = 0;
    return function(){
        id++;
        return id;
    };
}
const nextId=createIdGenerator();
console.log(nextId());
console.log(nextId());

// Problem 7: Explain (in comments) what a closure is and how it works in JavaScript.

// A closure is a function that remembers the variables from the scope
// in which it was created, even after that outer function has finished
// executing. In JavaScript, every function has a lexical scope, and when
// an inner function references variables from its outer function, the
// inner function keeps a reference to those variables in memory.

// How it works:
// 1. When a function is created inside another function, it forms a closure.
// 2. The inner function carries a "hidden" reference to its outer scope.
// 3. Even if the outer function returns, the inner function can still
//    access and modify the outer variables.
// 4. Each call to the outer function creates a brand new closure with its
//    own separate copy of those variables.