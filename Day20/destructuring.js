// Day 20 - Destructuring

// Problem 1: Destructure an array [1, 2, 3] into three variables a, b, c.
const [a,b,c]=[1,2,3];
console.log(a,b,c);

// Problem 2: Swap two variables using array destructuring.
let x=13;
let y=17;
[x,y]=[y,x];
console.log(x,y);

// Problem 3: Destructure an object {name: "Ali", age: 25, city: "Lahore"} into variables.
const user={name:'Mahroosh',age:17,city:'Karachi'};
const {name,age,city}=user;
console.log(name,age,city)

// Problem 4: Destructure an object with a different variable name (e.g., name -> fullName).
const {name:fullName}=user;
console.log(fullName);
const {city:newCity}=user;
console.log(newCity);


// Problem 5: Use nested destructuring on an object inside an object.
const student={address:{city:'Karachi',zip:54000}};
const {address:{city:studentCity,zip}}=student;
console.log(studentCity,zip);
// Problem 6: Destructure function parameters (pass an object to a function and destructure it directly).

function greet({name,age}){
return `Hello! ${name},you are ${age} years old.`;
}
console.log(greet(user));

// Problem 7: Use default values in destructuring (if property doesn't exist, use a default).
const {name: n,email='noemail@example.com' }=user;
console.log(n,email);

// Problem 8: Destructure only the first and third elements from an array (skip the second).
const [first,,third]=['blue','orange','green'];
console.log(first,third);