/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
class Stack {
  constructor() {
    this.storage = [];
    this.sizeOfStorage = 0;
    this.topPointer = 0;  
  }
  // add an item to the top of the stack
  // pointer for top
  // creating a storage
  push(value) {
    //adds to the top
    this.storage[this.sizeOfStorage] = value;
    this.sizeOfStorage++;
    this.topPointer++;
  };

  // remove an item from the top of the stack
  pop() {
    this.sizeOfStorage--;
    var topOfStack = this.storage[this.sizeOfStorage];
    this.topPointer--;
    return topOfStack
  };

  // return the number of items in the stack
  size() {
    return this.sizeOfStorage;
  };
};

var hello = new Stack();

// hello.push(5);
// hello.push(7);
// console.log(hello.pop());
// console.log(hello.pop());


/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function() {
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
  };
};
