'use strict';
// ===================================================
// =================== STRICT MODE ===================

/*
// helps with finding bugs on if-else block
// helps with avoid using reserved words

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 30;
*/

// =================================================
// =================== FUNCTIONS ===================

// Function:
// A piece of code that we can reuse over & over again in our code.
// It's like a variable but for whole chunks of code.
// Allows us to write more maintainable code by allowing to create resusable block of code - DRY

/*
function logger() {
  console.log('My name is Aakash');
}

// calling / invoking / running function
logger(23);
logger();
logger();

// parameters: only specific to functions
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges...`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// ==========================================================
// ========== FUNCTION DECLARATION VS. EXPRESSIONS ==========

// parameter: placeholder that holds the value
// argument: actual value passed during calling the function

// difference: function declartions can be called before even they are declared due to "Hoisting"

/*
// FUNCTION DECLARATION
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(2003);
console.log(age1);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2008);
console.log(age2);
*/

// =========================================================
// ==================== ARROW FUNCTIONS ====================
