//node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new Node(5);
let b = new Node(7);
let c = new Node(12);
let d = new Node(55);
let e = new Node(3);
let f = new Node(9);
let g = new Node(13);
let h = new Node(40);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = g;
c.right = h;

const getSecondLargest = function(tree) {
  //takes a tree
  //returns second largest value of tree
  //utilize a stack or queue to traverse the tree.
  var firstLargest = Number.NEGATIVE_INFINITY;
  var secLargest = Number.NEGATIVE_INFINITY;
  let stack = [tree];
  while (stack.length > 0) {
    let node = stack.pop();
    //tracks largest
    if (node.value > firstLargest) {
      let tmp = firstLargest;
      firstLargest = node.value;
      secLargest = tmp;
    } else if (node.value > secLargest) {
      secLargest = node.value;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return secLargest;
}

console.log(getSecondLargest(a));
//iterative approach of a binary search tree

const recursiveGetSecondLargest = function(tree, values = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], start) {
  var firstLargest;
  var secondLargest;
  if (tree.value > values[0]) {
    let tmp = values[0];
    values[0] = tree.value;
    values[1] = tmp;
  } else if (tree.value > values[1]) {
    values[1] = tree.value;
  }

  if (tree.left) {
    [firstLargest, secondLargest] = recursiveGetSecondLargest(tree.left, values, tree);
  }

  if (tree.right) {
    [firstLargest, secondLargest] = recursiveGetSecondLargest(tree.right, values, tree);
  }
  if (tree === start) {
    return secondLargest;
  } else {
    return values;
  }
}

console.log(recursiveGetSecondLargest(a)[1]);