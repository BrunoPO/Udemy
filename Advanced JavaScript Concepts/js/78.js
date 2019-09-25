// Create our own prototypes:
var human = {mortal: true}

var socrates = Object.create(human);
// the code above is the same as 
//var socrates.__proto__ = human

human.isPrototypeOf(socrates); // true