// JS Playground day 4. Use chrome js console.

// What is this!?
function sayHi(){
  return this
}

function sayBye(){
  this.person = "John Doe"
}

// sayHi()
// sayBye()

// using call!
var person = {
  firstName: "John",
  sayHi: function(){
    return `Hi ${this.firstName}`
  },
  dog: {
    sayHello: function(){
      return `Hello ${this.firstName}`
    }
  }
}

// console.log(person.dog.sayHello()) //=> "Hello Undefined"
// console.log(person.dog.sayHello.call(person)) //=> "Hello John"


// borrow functions from other objects :)
let josh = {
  firstName: "Joshua",
  sayHi: function(){
    return `Hi ${this.firstName}`
  }
}

let angie = {
  firstName: "Angie",
  // sayHi: function(){
  //   return `Hi ${this.firstName}`
  // }
}

// console.log(josh.sayHi())
// console.log(josh.sayHi.call(angie))

// bind!
let john = {
  firstName: "John",
  sayHi: function(){
    setTimeout(function(){
      console.log(`Hi ${this.firstName}`)
    }.bind(this), 1000)
  }
}
// john.sayHi()