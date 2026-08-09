// Day 12 - Scope & Hoisting

// Problem 1: Declare a variable inside a function and try to access it outside. What happens?
function mySecret(){
    let secret="I got a secret that nobody knows";
}
try {
    console.log(secret);
} catch (err) {
    console.log("Error (Problem 1):", err.message);
}

// Problem 2: Create a global variable and a local variable with the same name. Print both inside and outside a function.
let name="Global Name";
function showName(){
    let name ="Local Name";
    console.log(name); // Local Name
}
showName();      // prints "Local Name" (inside the function)
console.log(name); // prints "Global Name" (outside)
 // Problem 3: Use let inside a block (if/for) and try to access it outside. Do the same with var. What's the difference?
 if (true) {
    let blockVar = "I am a block-scoped variable";
    var functionVar = "I am a function-scoped variable";
}
try {
    console.log(blockVar); 
} catch (err) {
    console.log("Error (Problem 3 - let):", err.message);
}
console.log(functionVar); 
//The above will print "I am a function-scoped variable" because var is function-scoped, while let is block-scoped and cannot be accessed outside the block it was defined in.

// Problem 4: Demonstrate hoisting by calling a function before its declaration.
console.log(myinfo());
function myinfo() {
    return "Hoisting works!";
}

// Problem 5: Try to use a 'let' variable before declaring it. What error do you get? (Temporal Dead Zone)
try {
    console.log(myFavoriteColors); 
        let myFavoriteColors="Blue and Green";
}
catch (err) {
    console.log("Error (Problem 5 - Temporal Dead Zone):", err.message);
}


// Problem 6: Create a nested function and show how inner functions can access outer function variables (closure basics).
function outerFunction(){
    let outervar="Hello,this is outer function.";
    function innerfunction(){
        console.log(outervar);
    }
    return innerfunction; // returning the function itself (not calling it) = a closure
}
const myClosure = outerFunction();
myClosure(); // still remembers outervar
// Problem 7: What will this code print and why?
//    var x = 10;
//    function test() {
//      console.log(x);
//      var x = 20;
//    }
//    test();
var x = 10;
function test() {
  console.log(x); 
  var x = 20;
}
test();