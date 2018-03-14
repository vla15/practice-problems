class Node {
  constructor(value, id) {
    this.value = value;
    this.id = id;
    this.left = null;
    this.right = null;
  }
}
let tree = new Node(0, 0);
let b = new Node(1, 1);
let c = new Node(12, 2);
let d = new Node(12, 3);
let e = new Node(12, 4);
let f = new Node(5, 5);
let g = new Node(6, 6);
tree.left = b;
tree.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
//bfs
//queueing system for breath first
const bfs = function(tree, target) {
  let root = [tree];
  while (root.length > 0) {
    let node = root.shift();
    if (node.value === target) {
      return node;
    }
    if (node.left) {
      root.push(node.left);
    }
    if (node.right) {
      root.push(node.right)
    }
  }
  return null;
}
console.log(bfs(tree, 12));
//dfs

const dfs = function(tree, target) {
  let left = null;
  let right = null;
  if (tree.value === target) {
    return tree;
  }
  if (tree.left) {
    left = dfs(tree.left, target);
  }
  if (tree.right) {
    right = dfs(tree.right, target);
  }
  return left || right;
}

console.log(dfs(tree, 12))
//dfs iterative
const dfsIterative = function (tree, target) {
  let stack = [tree];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node.value === target) {
      return node;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return null;
}

console.log(dfsIterative(tree, 12) === dfs(tree, 12));
//binary search
const binarySearch = function(arr, target, left, right) {
  left = left || 0;
  right = right || arr.length;
  if (left > right) {
    return null;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (target < arr[mid]) {
    //check left side
    return binarySearch(arr, target, left, mid - 1);
  }
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, right);
  }
}
console.log(binarySearch([1,2,3,4,5],3))
//fisherYates shuffle

const fisherYatesShuffle = function(arr) {
  //takes value from 0 to n size of array and rplaces with n -1 of array
  //repeat till right side is to 0;
  let length = arr.length;
  while (length > 0) {
    let rnd = Math.floor(Math.random() * length--);
    let tmp = arr[length];
    arr[length] = arr[rnd];
    arr[rnd] = tmp;
  }
  return arr;
}
console.log('fisher', fisherYatesShuffle([2,3,1,9]))
//heap
class Heap {
  constructor() {
    this.contents = [];
  }
  add(value) {

  }
  remove(value) {

  }
  pop() {

  }
}

let heap = new Heap();
heap.add(7);
heap.add(4);
heap.add(5);
heap.add(3);
heap.add(9);
heap.add(6);
console.log(heap.contents);
console.log(heap.pop());
console.log(heap.contents);
heap.add(3);
heap.add(4);
console.log(heap.contents);
heap.remove(6);
console.log(heap.contents);
heap.remove(4);
console.log(heap.contents);


// //binary search
// const binarySearch = function(arr, target, left = 0, right = arr.length) {
//   //create mid from left and right values
//   if (left > right) {
//     return null;
//   }
//   let mid = Math.floor((left + right) / 2);
//   if (target === arr[mid]) {
//     return mid;
//   }
//   if (target > arr[mid]) {
//     //target is greater than midpoint, go right
//     return binarySearch(arr, target, mid + 1, right);
//     //target is less than midpoint, go left
//   } else if (target < arr[mid]) {
//     return binarySearch(arr, target, left, mid - 1);
//   }
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));

// //depth first search

// const depthFirstSearch = function(node, target) {
//   let left = null;
//   let right = null;
//   if (node.value === target) {
//     return node.index;
//   }
//   if (node.left) {
//     left = depthFirstSearch(node.left, target);
//   }
//   if (node.right) {
//     right = depthFirstSearch(node.right, target);
//   }
//   return left || right;
// }
// const tree = {
//   value: 0,
//   index: 0,
//   left: {
//     value: 1,
//     index: 1,
//     left: {
//       value: 3,
//       index: 3,
//       left: {},
//       right: {}
//     },
//     right: {
//       value: 4,
//       index: 4,
//       left: {},
//       right: {}
//     }
//   },
//   right: {
//     value: 2,
//     index: 2,
//     left: {
//       value: 5,
//       index: 5,
//       left: {},
//       right: {}
//     },
//     right: {
//       value: 6,
//       index: 6,
//       left: {},
//       right: {}
//     }
//   }
// }
// console.log(depthFirstSearch(tree, 5));

// const dfsIterative = function(tree, target) {
//   let stack = [tree]
//   while (stack.length > 0) {
//     let node = stack.pop();

//     if (node.value === target) {
//       return node.index;
//     }
//     if (node.right) {
//       stack.push(node.right)
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }
//   return null;
// }

// console.log(dfsIterative(tree, 5));
// //breath first search

// const bfs = function(root, target) {
//   let queue = [root];
//   while (queue.length > 0) {
//     let node = queue.shift();
//     if (node.value === target) {
//       return node.index;
//     }
//     if (node.left) {
//       queue.push(node.left);
//     }
//     if (node.right) {
//       queue.push(node.right);
//     }
//   }
//   return null;
// }

// console.log(bfs(tree, 3));

// //preorder traversal
// //postorder traversal
// //inorder traversal