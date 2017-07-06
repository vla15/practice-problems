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
  push(item) {
    //adds to the top
    this.storage[this.sizeOfStorage] = item;
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

var StackTest = new Stack();

// StackTest.push(5);
// StackTest.push(7);
// console.log(StackTest.pop());
// console.log(StackTest.pop());


/**
  * Queue Class
  */
class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack(); 
  }
  // Use two `stack` instances to implement your `queue` Class
  // get size from outbox
  // push value that was dequeued into outbox
    // will increase size which will be our pointer to next in queue
  // inbox will be storage
    // all items be pushed into storage

  // called to add an item to the `queue`
  enqueue(item) {
    // TODO: implement `enqueue`
    this.inbox.push(item)
  };

  // called to remove an item from the `queue`
  dequeue() {
    var dequeued = this.inbox.storage[this.outbox.size()];
    this.outbox.push(dequeued);
    return dequeued;
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  size() {
    return this.inbox.size() - this.outbox.size();
    // TODO: implement `size`
  };
};

var QueueTest = new Queue();
QueueTest.enqueue(5);
QueueTest.enqueue(7);
QueueTest.enqueue(10);

console.log(QueueTest.dequeue());
console.log(QueueTest.dequeue());
console.log(QueueTest.size())
