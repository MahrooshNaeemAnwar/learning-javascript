// Day 6 - Arrays

// Problem 1: Create an array of 5 fruits and print the first and last element.
const fruits=["Apple","Banana","Dragonfruit","Grapes","Mango"];
console.log(fruits[0] +" "+"is the first element and "+ fruits[4]+" "+"is the last element.");

// Problem 2: Find the length of an array.
const vowels=["a","e","i","o","u"];
console.log("Length of this array is:"+" "+vowels.length);


// Problem 3: Add an element to the end of an array using push(). Then remove the last element using pop().
const colors=["Blue","Green","Yellow"];
colors.push("Indigo");
console.log("after push:"+" "+colors);
colors.pop();
console.log("after pop:"+" "+colors);

// Problem 4: Add an element to the beginning using unshift(). Remove the first using shift().
colors.unshift("orange");
console.log("after adding an element:"+" "+colors);
colors.shift();
console.log("after removing the first element:"+" "+colors);

// Problem 5: Loop through an array and print each element.
//method 1
const subjects=["Maths","Physics","Computer","English","Urdu","Chemistry"];
for(let i=0;i<subjects.length;i++){
    console.log(subjects[i]);
}
//method 2 ,easier way
for(const subject of subjects){
    console.log(subject);
}

// Problem 6: Find the index of a specific element in an array using indexOf().
const anime=["JJK","AOT","CHAINSAW MAN","DEMON SLAYER","SOLO LEVELING"];
const index=anime.indexOf("SOLO LEVELING");
console.log("index of solo leveling is:"+" "+index);

// Problem 7: Remove an element from a specific position using splice().
anime.splice(2,1);
console.log(anime);

// Problem 8: Create an array of numbers and find the sum of all elements using a loop.
const num=[9,10,11,13,14,17];
let sum=0;
for(let i=0;i<num.length;i++){
    sum+=num[i];
}
console.log(sum);
