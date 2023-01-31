// A Function Which Tests if a Number is Odd.
function isOdd(number)
{
  let isNumberOdd = (number % 2) !== 0;
  return isNumberOdd;
}


console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
