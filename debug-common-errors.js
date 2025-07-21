/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");

// What’s Wrong?
//There is no closing parenthesis, closing quotations,  or ending semicolon. Adding those to fix. 

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, Number("8")];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong?
// Eight is defined as a string with characters, not a number. It is throwing up a NaN error since it can't be calculated.
//I kept the value as a string so I could use Number to convert it to an integer. Alongside that, I changed eight to 8 for easy conversion.


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Supposed to indicate num is NOT prime
    }
  }
  return true; // Supposed to indicate num IS prime
}

console.log(isPrime(257)); // Expected true but gets false

// What’s Wrong?
//the False and True values in the 2nd and 3rd return were flipped.
//switched them around and tested code for functionality with multiple prime and not prime numbers.