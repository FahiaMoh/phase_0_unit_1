// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Rootul Patel
//  2. Fahia Mohamed 


// 0. "YOU SIGNED... WHO?!"
var angelinaJolie = { 
    name: "Angelina Jolie",
    age:47,
    quote:"Hello"
};


// 1. "Here they Come!"
var adamSandler = { 
    name: "Adam Sandler",
    age: 47,
    quote:"That's your home! Are you too good for your home?"
};

var kristenBell = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?"
};

var jimCarrey = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
};


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name,age,quote) { 
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
      console.log(this.quote)
    };
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

var client = [angelinaJolie, adamSandler, kristenBell];
client.push(jimCarrey);

// console.log(client)


//////

client.forEach(function(entry) {
	console.log("Name: "+entry.name+" \n" + 
              "Age: "+entry.age+" \n" + 
              "Quote: "+entry.quote+" \n");
});

//////

// 4.  "But wait, there's more!"

adamSandler.showQuote = function() {
    console.log(this.quote)
    };
    
adamSandler.showQuote();

// ** BONUS **

angelinaJolie.show


function Employee(name,jobtitle,born){
this.name=name;
this.jobtitle=jobtitle;
this.born=born;
}

var rootulPatel=new Client("Rootul Patel",19,"Hello");
Client.prototype.showQuote = function() {
    console.log(this.quote)
};

shooterMcGavin.showQuote();

//  Your Reflection:
// What parts of your strategy worked? What problems did you face?
// The constructors and getting the clients to be displayed nice and clean was pretty tricky in that it wouldn't print out as we wanted it to.
// so we did a lot of playing around with it until we figured it out
// What questions did you have while coding? What resources did you find to help you answer them?
//whenever we didn't understand a concept like the constructor we went on google and tried to get a better grasp
// and looked out for examples that helped us get an idea of how we would work with it
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I was having trouble understanding the use and relevancy of the contructor so with some googling I figured out that it is actually
// a very efficient method that cuts out redundancies.  
// Did you learn any new skills or tricks?
// I learned how to use the contructor, how to display the client arrays data cleanly using a function and using a prototype
// How confident are you with each of the Learning Competencies?
// I'd say I am quite confident in the learning competencies with ample googling I've grasped the concepts 
// Which parts of the challenge did you enjoy?
//For the most part, this was a fun challenge.  There was so many ways to go about a certain task and it was fun to really 
// explore options
// Which parts of the challenge did you find tedious?
// Nothing in this challenge was tedious, I enjoyed and found most of it quite informative.  
