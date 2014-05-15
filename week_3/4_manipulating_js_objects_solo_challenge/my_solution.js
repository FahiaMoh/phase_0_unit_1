// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

2. Give adam a name property with the value "Adam".

3. Add a spouse property to terah and assign it the value of adam.

4. Change the value of the terah weight property to 125.

5. Remove the eyeColor property from terah.

6. Add a spouse property to adam and assign it the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.


*/   // pseudocode 
// 1. declare variable called adam and put it into object literal notation with nothing inside
// 2. create a name property and call it adam inside the object
// 3. put adam set as spouse as a property 
// 4. set terah's weight to 125 from 130 
// 5. create a delete method for the eyeColor for terah
// 6. assign adam a spouse property with terah as the value
// 7. create a empty propety valued object that assigns the children property to terah
// 8. add a carson property to the value of the terah children property and assign it with the property that has the name and set it as "Carson"
// 9. assign the carter property to the terah children, and do the same as above with the name property set to "Carter" 
// 10. assign colton property to terah children, and assign it the name property "Colton" like the other two above
// 11. add the children property to adam and set it equal to the terah children property  






// __________________________________________
// Write your code below.

var adam = {
  name:"Adam"
}; 

terah.spouse = adam; 
adam.spouse = terah; 
terah.weight= 125;
delete terah.eyeColor 
terah.children = {
};

var carson = {name: "Carson"};
terah.children.carson = {};
terah.children.carter = {}; 
terah.children.colton = {};
terah.children.carson.name = "Carson";
terah.children.carter.name = "Carter";
terah.children.colton.name = "Colton";
adam.children = terah.children 






// __________________________________________
// Reflection: Use the reflection guidelines

// What parts of your strategy worked? What problems did you face?
// I found that since this mirroed the last challenge it was a lot easier to go through it

// What questions did you have while coding? What resources did you find to help you answer them?
// the children property stuff got me really confused and the instructions didn't really help me. 
// the syntax at the bottom showed there was an error with the .name and im not sure if i was supposed 
// to edit it out but when I did it seemed to work.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I had a little trouble with the children property stuff, wasn't really clear how exactly to go about it
// so I spent some time fiddling around with the syntax until it said "true"

// Did you learn any new skills or tricks?
// Not sure if this was a trick or skill but I didn't have to put the childrens name in the object for it to pass
// I found that pretty cool that there are many ways to go about one problem

// How confident are you with each of the Learning Competencies?
// I am condifent with most of it, like the objects and how to create key value objects in JS.

// Which parts of the challenge did you enjoy?
// I enjoyed the moment you see that the tests pass true after a bit of struggling with the syntax

// Which parts of the challenge did you find tedious?
// Nothing was tedious. Moreso I found it confusing at the last few tests and had to fiddle around a lot
// to get it working

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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)