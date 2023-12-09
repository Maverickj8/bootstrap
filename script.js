// Meaning: Javascript is a very popular programming language that wa built just for web. until Node was introduced and it could now be run in both web and server.
// applications: Javascript can be used to build both, web, mobile app and web app.
// javascript keywords: They are a set of reserved owrds that cannot be used to name a variables since thez are already part of the syntax.
// variable: A variable is a conatainer.
// variable declaration: variables are declared using var, let and const. Var and let are used to declare a variable that can be changed over time, while the const is used to declare a variable tht cannot be changed.
let house = "home";
let floralWeb = "flower";
var hospital = "medicine";
const wardrobe = "dresses";
let num = 100;
// Datatype: thez are different data types namely Number, string, boolean, undefined, object, null.
// typeof: this a unary operators that is used to tell the type of data type.
// strings: This a text data type that is enclosed in a single or double quotaion mark.
// strings type: There 2 types of strings namely: normal string and template literals
// normal string
 let content = "value";
 let conatainer = 'bottle';
 let all = 200;
//  template literals 
let template = `obi cannot`
let workplace = "workaholic"
// strings method: Thez return the value of whatever is put inside it.

// charAT: returns the character at a given position in a string
 workplace.charAt(4);
//  returns the unicode of the character at a specified index in a string
workplace.charCodeAt(4); 
// returns a non-negative integer that is the Unicode code point value of the character 
workplace.codePointAt(4);
// joins two or more strings
workplace.concat(" people");
// returns true if a string ends with a specified string, Otherwise it returns false.
workplace.endsWith("holic");
// returns true if a string contains a specified string
workplace.includes("work");
// returns the position of the first occurrence of a value in a string
workplace.indexOf("r");
// returns the index (position) of the last occurrence of a specified value in a string.
workplace.lastIndexOf()
// returns the length of a given string.
workplace.length
// returns sort order -1, 1, or 0 (for before, after, or equal)
workplace.localeCompare()
// searches for a match in a string.
workplace.match()
// method returns an a string containing the results of matching a string.
workplace.matchAll()
let expression = /^0\d{10}$/
let phone = "09735672943"
phone.match(expression)
expression.test(phone)
// operators: operators are used to assign a value to a variable.eg assignment operator +, arithemetic operator + - % *, type operator typeof.
// Number: number is also a datatype.
// Number methods: 
// arithemetic operators
// Math: Math object allows you to perform mathematical tasks on numbers.

// static method returns the absolute value of a number.
Math.abs();
//  returns the inverse cosine (in radians) of a number.
Math.acos();
// returns the inverse cosine (in radians) of a number
Math.acosh();
// returns the inverse sine (in radians) of a number
Math.asin();
// returns the inverse tan (in radians) of a number
Math.atan(32);
// returns the cube root of a number
Math.cbrt(81);
// rounds up and returns the smallest integer greater than or equal to a given number
Math.ceil(24);
// returns the number of leading zero bits in the 32-bit binary representation of a number.
Math.clz32()
// returns e raised to the power of a number.
Math.exp
// rounds down and returns the largest integer less than or equal to a given number.
Math.floor
// returns the nearest 32-bit single precision float
Math.fround
// returns a floating-point number that's greater than or equal to 0 and less than 1,
Math.random
// returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
Math.max(4,4)
// Returns the smaller of a set of supplied numeric expressions.
Math.min(2,7,10,15,30);

Math.pow(3,2);
Math.round(23.382);
Math.sign(-5);
Math.max(2,4,68,2)

// boolean
let code = true;
let notCode = false;
code.valueOf();

// Comparison operators: the results of every comparison in javascript is boolean, ie true or false. >,<,==,!=,>=,<=,===,!== 

// Logical operators: logical && (and), || (or), ! (not).
// truthy and falsy values: truthy values are values when forced down to boolean gives true value.  
// Conditional statements: its a term called branching in programming. if else, switch case, tenary operator are used for implementing branching in js.
// if else:
let chisom = "" 
if (chisom == "" || false) {
    
} else {
    
}
 

// if-else chain: once one of the conditions is true, the chain breaks.
if (condition1) {

}else if(condition2) {

}else if(condition3){

}else if(conditionN){

}else {

}


// switch: Treats ranges diff.

let userOption = 3
switch (userOption) {
    case 1:
        console.log("user pressed 1");
        break;
    case 2:
        console.log("user pressed 2");
    case 3:
        console.log("user pressed 3");
    default:
        console.log("invalid option");
        break;
}


// tenary opeartor: ?:
// condition ? true : false




// date object: handles everything about date, time
let calender = new Date()

// array methods: 
// used to merge two or more arrays
concat() 
let array1 = ['a'] ;
let array2 = ['b'];
let array3 = array1.concat(array2);

// callbackFn
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// copies part of this array to another location in the same array and returns this array without modifying its length.
copyWithin(target, start, end)
// tests whether all elements in the array pass the test implemented by the provided function. returns a boolean
every(callbackFn)
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
filter(callbackFn)
// creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
flat(depth)

flatMap(callbackFn)
// executes a provided function once for each array element.
forEach(callbackFn)
// returns the first index at which a given element can be found in the array, or -1 if it is not present.
indexOf(searchElement, fromIndex)
// returns the last index at which a given element can be found in the array, or -1 if it is not present.
lastIndexOf(searchElement, fromIndex)
// creates a new array populated with the results of calling a provided function on every element in the calling array.
map(callbackFn)
// The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step
reduce(callbackFn, initialValue)

reduceRight()
// reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. 
reverse()
// returns a shallow copy of a portion of an array into a new array object
slice(start, end)
// tests whether at least one element in the array passes the test implemented by the provided function
some(callbackFn)
// sorts the elements of an array in place and returns the reference to the same array, now sorted
sort(compareFn)
// changes the contents of an array by removing or replacing existing elements and/or adding new elements 
splice(start, deleteCount, item1, item2)




// Date: objects represent a single moment in time in a platform-
// returns the day of the month for this date according to local time.
getDate()
getDay()
getFullYear()
calender.getHours()
getMilliseconds()
getMinutes()
getMonth()
getSeconds()
calender.getTime()
getTimezoneOffset()
// returns the day of the month for this date according to universal time.
getUTCDate()
getUTCDay()
getUTCFullYear()
getUTCHours()
getUTCMilliseconds()
getUTCMinutes()
getUTCMonth()
getUTCSeconds()
