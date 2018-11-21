// OOP JS
// easy example warm up with your name!

function Person(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}
//
let josh = new Person("Joshua", "Prpich")
//
josh.firstName
josh.lastName


// We can use functions and objects to mimic Classes!

function House(bedrooms, bathrooms) {
  this.bedrooms = bedrooms
  this.bathrooms = bathrooms
}

let firstHouse = House(2,2)
// console.log(firstHouse)
// what is returned here?

firstHouse = new House(2,2)
// console.log(firstHouse)
// what is returned here?


// what does new do?
// creates an object out of thin air
// sets the value of the keyword this to be that empty object
// adds and implicit return this
// adds an property on the empty object called __proto__ which link the prototype property on the contructor function to the empty object

function Dog(name, age){
  this.name = name
  this.age = age
  this.bark = function(){
    console.log(`${this.name} just barked`)
  }
}

let spot = new Dog("Spot", 3)
let osu = new Dog("Osu", 1)

// console.log(spot.name)
// spot.bark()


// Multiple Constructors
function Car(model, year){
  this.model = model
  this.year = year
  this.numWheels = 10
  this.doors = 10
}

function Motorcycle(model, year){
  Car.call(this, model, year)
  this.numWheels = 2
  this.doors = 0
}

let twingo = new Car("Renault", 2018)
let mercedes = new Car("Mercedes", 2012)
// console.log(twingo)
// console.log(mercedes)

let bmw = new Motorcycle("BMW Bike", 2012)
let dukaki = new Motorcycle("Mega Duk", 2018)
// console.log(bmw)
// console.log(dukaki)

// Prototypes!
function Person(name){
  this.name = name
}

let joshua = new Person("joshua")
let angie = new Person("angie")

// console.log(josh.__proto__ === Person.prototype)

// Prototype Chain
Person.prototype.isCool = true
// console.log(joshua.isCool)

// lets create an array
let arr = [1,2,3]
// console.log(arr.__proto__ === Array.prototype)

// what about Object.prototype?

// Use some more efficient code!
// before we knew about prototypes
function Person(name){
  this.name = name
  this.sayHi = function(){
    return "Hi " + this.name
  }
}

let john = new Person("Johny")
console.log(john)
console.log(john.sayHi())


// much better :)
// function Person(name){
//   this.name = name
// }
// Person.prototype.sayHi = function(){
//   return "Hi " + this.name
// }

// let hannah = new Person("Johny")
// let rebe = new Person("Johny")
// let august = new Person("Johny")
// let german = new Person("Johny")

// console.log(john)
// console.log(john.sayHi())
// console.log(hannah.sayHi())
// console.log(rebe.sayHi())
// console.log(august.sayHi())
// console.log(german.sayHi())