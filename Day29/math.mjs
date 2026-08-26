//Problem 1:export add and subtract functions.
export const add=(a,b)=>{
    return a+b;
}
export const subtract=(a,b)=>{
    return a-b;
}

//Problem 2: named and default export.
export const multiply=(a,b)=>{
    return a*b;
}
export const divide=(a,b)=>{
    return a/b;
}

//default export.
const calculatorDescription=()=>{
    return "It's a simple math utility module.";
}
export default calculatorDescription;

//Problem 7:export constants.
export const PI=3.1428;
export const Avagadro_Number=6.02e23;
export const Electron_Charge=1.60e-19;
export const MAX_SIZE=100;