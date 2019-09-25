// new binding
function Person(name, age) {
  //On a constructor method this mean the property that will be created associated to the object
  this.name = name;
  this.age =age;
  console.log(this);
}

const person1 = new Person('Xavier', 55)//log: Person {name: "Xavier", age: 55}

//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi() {//this function is dynamically scoped
    //here we have the common use of this
    //in this case the 'this' is referencing the object above that is person.
    console.log('hi ' + this.name)
  }
}

person.hi()//log: hi Karen

//explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    //on the use of bind you say witch object the function will refer.
    //In this case it's window
    console.log('hi' + this.setTimeout)
  }.bind(window)
}

person3.hi()//log: hi function setTimeout() { [native code] }

// arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  teste: function(){

    var inner = function(){
      //remember function declared into functions will be global scope so will be refer. to the window
      console.log('hi '+this.name)//this.name will point to any global var
    }
    return inner();
  },
  hi: function() {
    var inner = () => {
      //arrow functions works diferentily of default function. Arrow functions have lexical scope(early binding).
      //it means that arrow will be decide on compile time for each object it belongs.
      console.log('hi ' + this.name)//
    }
    return inner()
  }
}

person4.hi() //log: hi Karen

var name = "teste123"

person4.teste() //log: hi teste123
