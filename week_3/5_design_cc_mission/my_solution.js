// I worked with: Michael Weiss on this challenge

// Your mission description:
// The mission is to approach the final Enemy and defeat him 1on1.  Tharin will have to fight
// to the death against the enemy until one of them survives.   

// Pseudocode
// move up 2x
// move right 1x
// move up 1x
// move left 1x
// attack enemy 2x 

// Initial Code
var Enemy = function(name, health, strength, position){
	this.position = position;
	this.name = name;
	this.health = health;
    this.strength = strength;
}
var Tharin = {
    name: "Tharin",
	position: {x:0, y:0},
	health: 100,
	strength: 100,
	moveUp: function() {
		this.position.y += 5;
		console.log(Tharin.position.y);
	},
	moveDown: function() {
		this.position.y -= 5;
		console.log(Tharin.position.y);
	},
	moveRight: function() {
		this.position.x += 5;
		console.log(Tharin.position.x);
	},
	moveLeft: function() {
		this.position.x -= 5;
		console.log(Tharin.position.x);
	},
	attackNow: function(Enemy) {
	if (Tharin.health <= 0)
	{
		return console.log("Your health is too low to attack")
	}
	if (Enemy.health <= 0)
	{
		return console.log("You've already defeated " + Enemy.name)
	}
	if (Math.abs (Tharin.position.x - Enemy.position.x) <= 1
	&& Math.abs (Tharin.position.y - Enemy.position.y) <= 1)
		{ 
		Tharin.health -= Enemy.strength * 0.5;
	    if (Enemy.health >= Tharin.strength * 0.5)
		    {
		    Enemy.health -= Tharin.strength * 0.5;
			console.log(Enemy.health)
			}
	    else {
	    	(Enemy.health = 0);
	  		console.log("You have defeated "+ Enemy.name)
	  		}
		}
		else { 
			console.log("You're too far away to attack!(move closer)")
		}
		if (Tharin.health <= 0)
	{
		return console.log("You've been defeated")
	}
	}
};

var George = new Enemy("George", 75, 100, {x:10, y:10})
Tharin.moveUp()
Tharin.moveRight();
Tharin.moveUp();
Tharin.moveRight();
Tharin.attackNow(George);
Tharin.attackNow(George);  
// Refactored Code

//The variables we chose are clear and concise.  We also made sure to make the enemy variable in terms of health and
// strength.  The positioning can also vary and we've opened more options for enemies and kept it open ended.  We had if statements that said
// ultimately the same things so we compacted those and made it less redundant 
// We did do well in our Math.abs if statement where we kept the redundancies out of it.


// Reflection

// What parts of your strategy worked? What problems did you face?
// We had trouble with the attackNow function.  There was a lot of logic to go through, especially with taking health down after each hit
// we ran into problems with our tharin character still being able to attack after being killed and things like this had to be fixed. 

// What questions did you have while coding? What resources did you find to help you answer them?
// We had lots of questions and we used sites like W3Schools to get a grasp of the examples and implement
// these things into our program

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// In the code combat game, the attackNow function did not have a parameter like we do in ours.  I don't know how we could make it so that 
// we could omit the name being put in the paranthesis.

// Did you learn any new skills or tricks?
// I learned how to implement the Math.abs and the use of objects 

// How confident are you with each of the Learning Competencies?
// I think i've grasped a good amount of knowledge from this challenge and I did a lot of research on core concepts like accessing libraries 
// in order to get the functions to work they way we wanted it to.

// Which parts of the challenge did you enjoy?
// seeing our logic and everything we work on actually produce something that was similar to a game was pretty cool
// I enjoyed seeing the end product and playing around with the idea of making a game.

// Which parts of the challenge did you find tedious?
// We did a lot of debugging, I think this isn't tedious.  It was more informative because we broke down the problems and took the steps
// to fix and debug the issues.  This was in itself a learning experience and I didn't find anything tedious.  