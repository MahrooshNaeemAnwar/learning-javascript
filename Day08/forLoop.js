// Day 8 - For Loop

// Problem 1: Print numbers from 1 to 100 using a for loop.

for(let a=1;a<=100;a++){
    console.log(a)
}

// Problem 2: Print all even numbers between 1 and 100 using the modulus (%) operator.

for(let x=1;x<=100;x++){
    if(x%2===0){console.log(x)}
}
//problem 3: Print all even numbers between 1 and 100 by incrementing the loop by 2.

for(let num=2;num<=100;num+=2){
    console.log(num)
}

// Problem 4: Print the multiplication table of 7.
let m=7;
for(let i=1;i<=10;i++){
    console.log(m+" "+"*"+" "+i+" "+"="+" "+i*m)
    }

// Problem 5: Find the factorial of a number (e.g., 5! = 5*4*3*2*1 = 120).
let num1=5;
let factorial=1;
for(let i=1;i<=num1;i++){
    factorial*=i ;
}
console.log("factorial of"+" "+num1+" "+"is:"+" "+factorial)


// Problem 6: Print the sum of numbers from 1 to 100.
let sum=0;
for( let number=1;number<=100;number++){
   sum+=number ;
}
console.log(sum);

// Problem 7: Print all numbers divisible by 3 between 1 and 50.
for(let b=1;b<=50;b++){
    if(b%3===0){
        console.log(b);
    }
}


// Problem 8: Print this pattern using nested for loops:
//     *
//     **
//     ***
//     ****
//     *****
let rows=5;
for(let j=1;j<=rows;j++){
    let pattern="";
    for(let k=1;k<=j;k++){
        pattern +="*";    
    }console.log(pattern);
} 

// Problem 9: Reverse a number using a for loop (e.g., 1234 becomes 4321).
const originalnum=1234;
const numstr=originalnum.toString();
let reversedstr="";
for(let l=numstr.length-1;l>=0;l--){
    reversedstr += numstr[l];
}
let reversednumber=Number(reversedstr);
console.log(reversednumber);