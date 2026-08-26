// Day 29 - ES6 Modules
// Note: Run in browser with type="module" in script tag, or use Node with .mjs extension.

// Problem 1: Create a math.mjs file that exports add and subtract functions. Import them in another file.
import {add,subtract} from './math.mjs';
console.log(add(8,3));
console.log(subtract(16,6));

// Problem 2: Use named exports vs default export. Create one file with both.
import calculatorDescription,{multiply,divide} from './math.mjs';
console.log(multiply(11,1));
console.log(divide(20,2));
console.log(calculatorDescription());

// Problem 3: Import a default export with a different name.
import calculatorInfo from './math.mjs'
console.log(calculatorInfo());

// Problem 4: Import all exports from a module using * as alias.
import * as mathUtils from './math.mjs';
console.log(mathUtils.add(9,2));
console.log(mathUtils.multiply(7,1));
console.log(mathUtils.divide(63,7));

// Problem 5: Create a utility module that exports multiple utility functions (capitalize, reverse, etc.)
import { capitalize, reverse, toUpperCase, toLowerCase, repeat } from './utility.mjs';

console.log(capitalize('hello'));       
console.log(reverse('hello'));          
console.log(toUpperCase('hello'));      
console.log(toLowerCase('HELLO'));      
console.log(repeat('ha', 7));           

// Problem 6: Re-export a module from another module
import { add as reAdd, multiply as reMultiply } from './reExport.mjs';
console.log(reAdd(10, 1));             // 11
console.log(reMultiply(10, 1));        // 10

// Problem 7: Create a constants module that exports constant values like PI, MAX_SIZE, etc.
import {PI,MAX_SIZE,Avagadro_Number,Electron_Charge} from './math.mjs';

console.log(PI);
console.log(MAX_SIZE);
console.log(Avagadro_Number);
console.log(Electron_Charge);