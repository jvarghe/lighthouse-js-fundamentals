// Example 1: An Anonymous Function That Checks for Even Numbers.
const isEven  = function (num) 
{
  return num % 2 === 0;
}

// Check if 10 and 11 are even.
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

// Print results to console.
console.log(tenIsEven);
console.log(elevenIsEven);

// Combine the last two steps: 
console.log(isEven(10));
console.log(isEven(11));
