// How to decide what to wear outside 1.
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


// How to decide what to wear outside 2.
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}


// How to decide what to wear outside 3.
const temperature = 12;

if (temperature < 0) { console.log("Make sure you pick out a scarf!"); } 
else if (temperature < 15) { console.log("Short sleeves won't cut it!"); } 
else { console.log("Short sleeves are fine."); }

console.log("Now you're ready to go outside!");


// How to decide if you can vote.
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) 
{
  console.log("You are eligible to vote.");
}


// How to decide if you should go outside. 
if (temperature < -40 || temperature > 40) 
{
  console.log("Maybe going outside isn't such a great idea…");
}


// How to decide if you should leave your umbrella at home. 
if (!raining) 
{
  console.log("Leave your umbrella at home!");
}
