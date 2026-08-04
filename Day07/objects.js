// Day 7 - Objects

// Problem 1: Create an object representing a person with name, age, and city. Print all properties.
const user={name:"Mahroosh",
    age:16, city:"Karachi",
}
console.log(user);

// Problem 2: Access object properties using both dot notation and bracket notation.
console.log(user.name);
console.log(user["age"]);

// Problem 3: Add a new property to an existing object (e.g., add "email" to the person object).
user.email="mahrooshnaeem10@gmail.com";
console.log(user);


// Problem 4: Update an existing property value.
user.age=17;
console.log(user);

// Problem 5: Delete a property from an object using the delete keyword.
delete user.city;
console.log(user);


// Problem 6: Loop through an object using for...in loop and print all keys and values.
for (let key in user){
    console.log(key +": "+user[key]);
}

// Problem 7: Create an object with a method (a function inside an object) that prints "Hello".
const student={name:"Alien",
    age:17,
    greeting:function (){
        return "hello"+"!"+" "+this.name;
    }
} 
console.log(student.greeting());

// Problem 8: Create an array of objects (e.g., array of students with name and grade). Loop and print each.
const students=[{name:"MAHROOSH",grade:"A+"},{name:"LAIBA",grade:"A+"},{name:"RIMSHA",grade:"A+"}];
for(let i=0;i<students.length;i++){
    console.log(students[i].name+" - "+students[i].grade);
}