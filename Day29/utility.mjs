// Problem 5: Utility module with multiple utility functions.
export const capitalize=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
}
export const reverse=(str)=>{
    return str.split('').reverse().join('');
}
export const toUpperCase=(str)=>{
    return str.toUpperCase();
}
export const toLowerCase= (str)=>{
    return str.toLowerCase();
}
export const repeat=(str,n)=>{
    return str.repeat(n);
}
    


