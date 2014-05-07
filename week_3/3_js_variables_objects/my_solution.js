// I paired [by myself, with: Hilary Barr] on this challenge.




// Pseudocode
// create variable called secretNumber and set equal to an integer value
// set secretNumber to equal the number 7
// create variable called password and set it equal to the string, "just open the door"
// declare variable called allowedIn and set it equal false
// declare variable called members and set it equal to an array with the first element being John 
// and the fourth element to be Mary

// __________________________________________
// Write your code below.
var secretNumber = 7; 
var password ="just open the door"
var allowedIn = false
var members = ["John", , ,"Mary"]


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// I don't think the code needs to be improved. The last variable, members,  
// shows empty elements in the array between John and Mary. I think this is a good 
// way to show the first and fourth element of an array.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// What parts of your strategy worked? What problems did you face?
// I didn't face any real problems, Just confusion with how node.js worked prior to working on the challenge
// A lot of my confusion was cleared up by my pair though
// What questions did you have while coding? What resources did you find to help you answer them?
// I had questions on syntax-specific concepts and best practices that were cleared up by resources 
// stackoverflow
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Nothing stuck out as being troubling to work around
// Did you learn any new skills or tricks?
// I didn't know you could put placeholders in an array using commas and I initally put it in as a 
// random assumption and it actually worked
// How confident are you with each of the Learning Competencies?
// I'm quite confident with the learning competencies.  I think it was a lot easier to retain
// the core concepts especially when working with a pair
// Which parts of the challenge did you enjoy?
// the test driven development aspect was cool.  I found it pretty interesting to do it this way and
// I definitely enjoyed it
// Which parts of the challenge did you find tedious?
// nothing came off as tedious in this challenge. 

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

