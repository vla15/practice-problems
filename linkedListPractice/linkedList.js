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
console.log(reverseLinkedList(a));
// console.log(a)