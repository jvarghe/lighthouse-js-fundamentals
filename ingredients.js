/* PROJECT: ITERATING OVER ARRAYS: BANANA BREAD

We've made it pretty far into the Lighthouse Labs prep course. Let's celebrate by making some banana bread. Before we start baking, we'll need to write a script that prints out the ingredients for us. To spice things up a bit, we'll print the ingredients both in order and in reverse order.
Challenge
Instruction

Create a JavaScript file that prints out our ingredients.

Create a new file in your lighthouse-js-fundamentals directory in Vagrant called ingredients.js, and copy the following code into it.

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

    Write a loop under each comment in the file.
    Under the first, write a while loop that prints out each item of ingredients.
    Under the second, write a for loop that does the same thing.
    And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").


Submit your work

Finally, commit your work to your lighthouse-js-fundamentals git repo and push it to GitHub.

 */


// The Array Containing a List of Items Required to Make Banana Bread.
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


// Write a while loop that prints out the contents of ingredients:
let i = 0; 

console.log("Printing Out the Array Using a While-Loop:");
while(i < ingredients.length)
{
  console.log(ingredients[i]);
  i++;
}

console.log("\n");


// Write a for loop that prints out the contents of ingredients:
console.log("Printing Out the Array Using a For-Loop:");
for(let i = 0; i < ingredients.length; i++)
{
  console.log(ingredients[i]); 
}

console.log("\n");


// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Printing Out the Array in REVERSE Using a For-Loop:");
for(let i = (ingredients.length - 1); i >= 0; i--)
{
  console.log(ingredients[i]);
}
