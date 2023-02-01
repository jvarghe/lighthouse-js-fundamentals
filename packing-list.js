// Example 1: Use a For-Loop to Print the Contents of an Array to Screen 
// One-by-one. 
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("EXAMPLE 1: Kitchen stuff to pack:");

for (let i = 0; i < packingList.length; i++) 
{
  console.log(packingList[i]);
}

// Create Some Space Between Example 1 and Example 2.
console.log("\n");

// Example 2: Use a While-Loop to Print the Contents of an Array to Screen 
// One-by-one. 
console.log("EXAMPLE 2: Kitchen stuff to pack:");

let i = 0;
while (i < packingList.length) 
{
  console.log(packingList[i]);
  i++;
}