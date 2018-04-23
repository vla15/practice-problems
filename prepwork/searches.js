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
let c = new Node(13, 2);
let d = new Node(13, 3);
let e = new Node(13, 4);
let f = new Node(6, 5);
let g = new Node(6, 6);
tree.left = b;
tree.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

//dfs
const dfs = function(tree, target) {
  if (tree.value === target) {
    return tree;
  }
  let left = null;
  let right = null;
  if (tree.left) {
    left = dfs(tree.left, target);
  }
  if (tree.right) {
    right = dfs(tree.right, target);
  }
  return left || right;
}


console.log('dfs', dfs(tree, 13));

//iterative dfs
const iterativeDfs = function(tree, target) {
  //utilizes a stack
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

console.log("iterative dfs", iterativeDfs(tree, 6));
//bfs

const bfs = function(tree, target) {
  let queue = [tree];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === target) {
      return node;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return null;
}

console.log('bfs ', bfs(tree, 13))
//binarySearch
const binarySearch = function(arr, target, start = 0, end = arr.length) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (start > end) {
    return null;
  }
  if (target > arr[mid]) {
    //right half
    return binarySearch(arr, target, mid + 1, end);
  } else if (target < arr[mid]) {
    //left half
    return binarySearch(arr, target, start, mid - 1)
  }
}
console.log(binarySearch([1,2,3,4,5],3))
//fisherYaes
const fisherYates = function(arr) {
  let length = arr.length;
  while (length > 0) {
    let rnd = Math.floor(Math.random() * length--);
    let tmp = arr[length];
    arr[length] = arr[rnd];
    arr[rnd] = tmp;
  }
  return arr;
}
console.log('fisher', fisherYates([1,2,3,4,5]))

class Heap {
  constructor() {
    this.contents = [];
  }
  add(value) {
    this.contents.push(value);
    this.bubbleUp(this.contents.length - 1);
  }
  pop() {
    //pops off top value
    //replaces it with last value
    let last = this.contents.pop();
    let topValue = this.contents[0];
    this.contents[0] = last;
    this.bubbleDown(0);
    return topValue;
  }
  bubbleDown(index) {
    let firstChild = (2 * (index + 1)) - 1;
    let secondChild = (2 * (index + 1) + 1) - 1;
    if (this.contents[firstChild] && this.contents[secondChild] && this.contents[firstChild] < this.contents[secondChild] && this.contents[index] > this.contents[firstChild]) {
      let tmp = this.contents[index];
      this.contents[index] = this.contents[firstChild];
      this.contents[firstChild] = tmp;
      this.bubbleDown(firstChild);
    } else if (this.contents[firstChild] && this.contents[secondChild] && this.contents[secondChild] < this.contents[firstChild] && this.contents[index] > this.contents[secondChild]) {
      let tmp = this.contents[index];
      this.contents[index] = this.contents[secondChild];
      this.contents[secondChild] = tmp;
      this.bubbleDown(secondChild);
    } else if (this.contents[firstChild] && this.contents[firstChild] < this.contents[index]) {
      let tmp = this.contents[index];
      this.contents[index] = this.contents[firstChild];
      this.contents[firstChild] = tmp;
      this.bubbleDown(firstChild);
    }
  }
  bubbleUp(index) {
    if (index > 0) {
      let parentIndex = Math.floor((index + 1) / 2) - 1;
      if (this.contents[parentIndex] > this.contents[index]) {
        let tmp = this.contents[index];
        this.contents[index] = this.contents[parentIndex];
        this.contents[parentIndex] = tmp;
        this.bubbleUp(parentIndex);
      }
    }
  }
}

let heap = new Heap();
heap.add(7);
heap.add(4);
heap.add(5);
heap.add(3);
heap.add(9);
heap.add(6);
console.log('check da heap', heap.contents);
console.log(heap.pop());
console.log(heap.contents);
heap.add(3);
heap.add(4);
console.log(heap.contents);
heap.pop()
console.log(heap.contents);
// heap.remove(6);
// console.log(heap.contents);
// heap.remove(4);
// console.log(heap.contents);


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