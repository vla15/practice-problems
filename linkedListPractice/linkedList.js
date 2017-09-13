//linkedList format
// const node = function(value) {
//   this.value = value;
//   this.next = null;
// }



//to recursively reverse a linked list, you first have to reach the end of the linkedlist
//then update the last value to be set as the second to last value.  Then set that following value to null
//basically when performing this operation recursively, you'll proceed to the end. Then add to the end
//with values remaining in the stack call.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


var a = new Node(5);
var b = new Node(6);
var c = new Node(7);
var d = new Node(8);
var e = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;



const reverseLinkedList = function(node) {
  if (!node.next) {
    return node;
  }
  var current = reverseLinkedList(node.next);
  node.next.next = node;
  node.next = null;
  return current;
}
// console.log(a);
// console.log(reverseLinkedList(a));
// console.log(a)


const reverseLinkedListIterative = function (node) {
  var current = node;
  var previous = null;
  //traverse list
  while (current) {
    //pointer to next value to traverse
    var next = current.next;
    //since first value will be last, next has to be null
    current.next = previous;
    //store previous value as the current
    previous = current;
    //continue to iterate through
    if (next) {
      current = next;
    } else {
      return current;
    }
  }
}

var b = reverseLinkedListIterative(a);
console.log(b);
