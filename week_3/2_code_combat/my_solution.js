// I worked on this challenge [by myself, with:]
 [by myself]
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
// Rescue Mission
// move down 2x
// move right 1x
// move up 2x
// move right 3x
// move down 1x
// attack 1x 
this.moveDown();
this.moveDown();
this.moveRight(); 
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

 //Grab the Mushroom
 // move up 1x
 // move right 1x
 // take mushroom 1x
// move left 2x
// move up 1x
// attack 1x
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Drink Me 
// move right 2x
// move down 1x
// takes potion 1x
// move up 1x
// moves right 2x
// attack 1x
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


 // Taunt the guards
 // move right 1x
 // bust door 1x
 // move right 1x
 // say hey 1x
 // move left 2x
 // say attack 1x
 // move right 1x
 // say follow me
 // move right 2x
 // move up 1x
 // move right 1x
 // say hey 1x
 // move down 1x
 // move right 1x
 // move up 1x
 // move right 1x
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
 // It's a trap
// move down 2x
// say hey 1x
// move up 2x
// attack 1x
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();
this.say("Attack!");

// Taunt
// say hey 3x
this.say("Hey! Over here!");
this.say("Hey! Come here!");
this.say("YOOO!");
 
 // Cowardly Taunt
 // Move to (50,16) 1x
 // say hey 1x
 // move to (70,10) 1x
this.moveXY(50,16);
this.say("HEY YOU!");
this.moveXY(70,10);

// commanding followers
// say follow 1x
// move to (50,60) 1x
// say attack 1x
// move to (75,63) 1x
this.say("Follow!");
this.moveXY(70,30);
this.say("Attack");
this.moveXY(75,63);

//mobile artillery
// move to(43,45) 1x
// attack (48,61) 1x
// attack (44,55) 1x
// move to (46,34) 1x
// attack (67,54) 2x
this.moveXY(40,43);
this.attackXY(48,61);
this.attackXY(43,53);
this.moveXY(46,34);
this.attackXY(67,54);
this.attackXY(67,54);
this.attackXY(54,40);

// Break the prison
// if name is krogg
// return false
// if name is marcus + robert
// return true
// if name is gordon 
// return true
if(name === "Krogg")
    return false;  
if(name =="Lucas")
return true;
if (name == "Marcus" "Robert")
return true;
if (name == "Gordon")
return true;

// Reflection:
// Write your reflection here.

// I think the 'this' in the codecombat game represents the console, this brings out whatever was logged in the console, in terms of the game, 
// that was the characters name.  

// The () is used to hold a parameter, so an integer value or string can be put in the curly brackets. 

// The semicolon is used to seperate statements, it is mandatory to use when there is two statements on the same line.  
// In example, var i=0; i ++, whereas, var i=0 does not need it and is optional. 

// What parts of your strategy worked? What problems did you face?
// My pseudocode didn't always work and I had to play around with the code to make the game play through.

// What questions did you have while coding? What resources did you find to help you answer them?
// I had to 

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Did you learn any new skills or tricks?
//I never took the pseudocode approach to working towards a solution, so this was definitely a different method of problem solving that I found interesting.
// It actually benefited me having a framework to work with even though it wasn't completely perfect.
// How confident are you with each of the Learning Competencies?
// I found that I easily grasped the learning comeptencies of this challenge
// Which parts of the challenge did you enjoy?
// Which parts of the challenge did you find tedious?
// I didn't really enjoy any part of this codecombat challenge, I felt it was incredibly tedious.