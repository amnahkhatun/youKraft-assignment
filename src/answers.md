# Question number 1
## What are microtasks? What is a microtask queue? What is their role in Promises and how are they different from callbacks?

- The JavaScript engine has an event loop,any tasks come in are executed in the order they arrive. Inside the event loop, there is a subqueue called the Microtasks queue.

- The Microtask queue blocks the rest of the event loop from running until all Microtasks have been completed.  Promises are given preference and go into the microtasks queue. That's why “wait” for Promises to resolve before moving on to the next task. Once all the tasks in the Microtasks queue is completed microtask queue is empty and regular tasks will run.

- Microtask queue is processed in a separate event loop. The Callback queue is processed in the same event loop.

   setTimeout(function() {
         console.log('setTimeout');
      }, 0); //will go to callback queue
 
      Promise.resolve().then(function() {
         console.log('promise resolve');
      }); //will go to microtask queue

      Here microtask queue will be given priority over callback queue

# Question number 2
## Explain with examples how private, protected variables can be implemented in classes and how can they be used in subclasses?

- Creating Private variables using Closures

(accessible only from inside the class)

function carMain() {
    let speed = 0;

    return {
        accelerate: function () {
            return speed++;
        }
    }
}

let car1 = new carMain();
let car2 = new carMain()
console.log(car1.accelerate()); // 0
console.log(car1.accelerate()); // 1
console.log(car2.accelerate()); // 0
console.log(car2.accelerate()); // 1
console.log(car1.accelerate()); // 2
console.log(car2.accelerate()); // 2

- Creating Protected variable

//using getter setter syntax

class NameGenerator {
    _name;

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let nameGenerator = new NameGenerator("John");
console.log(`My name is ${nameGenerator.name}`); // My name is John
nameGenerator.name = "Jane"; //cannot re assign here as it is a read only property