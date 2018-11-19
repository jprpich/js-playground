// JS Playground day 3
let journal = [
  {
    events: ["work", "touched tree"],
    squirrel: true
  },
  {
    events: ["work", "ice cream"],
    squirrel: false
  },
]

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  sayHi: function(){
    console.log(`Hey! ${this.firstName}`)
  },
  sayBye: function(){
    setTimeout(function(){
      console.log("Bye man. I need to learn some more JS to use your name!")
    }, 3000)
  }
}

// Higher order functions national Debt Calculater
let nationalDebt = 0
function printDebt(){
  console.log(`our nations national debt is rising every second and currently stands at ${nationalDebt}`)
  nationalDebt += 10000
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
}
let printInterval = 3000
// setInterval(printDebt, printInterval)

// New years count down using anonoumous func
var counter = 10;
stopVal = setInterval(function(){
  console.log(counter);
  counter--
  if (counter === 0) {
    console.log("HAPPY NEW YEAR!!");
    clearInterval(stopVal)
  }
}, 1000);

// forEach!
todos = ["work", "study", "read"]
todos.forEach(function(ele){
  console.log(ele)
})