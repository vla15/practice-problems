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
console.log(bfs(tree, 12));

//dfs
const dfs = function(tree, target) {
  let left = null;
  let right = null;
  if (tree.value === target) {
    return tree;
  }
  if (tree.left) {
    left = left || dfs(tree.left, target);
  }
  if (tree.right) {
    right = right || dfs(tree.right, target);
  }
  //only work because the value can only be down one path
  return left || right;
}
console.log('dfs', dfs(tree, 12));

const dfsIterative = function(tree, target) {
  let stack = [tree];
  while (stack.length > 0) {
    let node = stack.pop();
    //you'll always add left to the stack first
    //then it acts as a regular recursive tree
    if (node.value === target) {
      //return value will break the while loop
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

console.log("dfsiterative", dfs(tree, 12) === dfsIterative(tree, 12));

//binarySearch
const binarySearch = function(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return null;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (target > arr[mid]) {
    //on the right
    return binarySearch(arr, target, mid + 1, right);
  }
  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return null;
}
console.log(binarySearch([1,2,3,4,5,6], 6))
//fisherYates

const fisherYatesShuffle = function(arr) {
  //shuffles in place
  //use a pointer to separate sorted and unsorted part of arr
  //as sort occurs, move sorted to sorted section of arr which increases
  //decrease unsorted section as sorted section increases
  let length = arr.length;
  while (length > 0) {
    let rnd = Math.floor(Math.random() * length--);
    //swap places
    let tmp = arr[rnd];
    arr[rnd] = arr[length];
    arr[length] = tmp;
  }
  return arr;
}
console.log(fisherYatesShuffle([2,12, 9, 3, 1, 0, 4]))
//heap
class Heap {
  constructor() {
    this.contents = [];
  }

  add(value) {
    this.contents.push(value);
    this.bubbleUp(this.contents.length - 1)
  }

  remove(value) {
    //find a value in contents
    let targetIdx;
    for (var i = 0 ; i < this.contents.length; i ++) {
      if (this.contents[i] === value) {
        targetIdx = i;
        break;
      }
    }
    const last = this.contents.pop();
    this.contents[targetIdx] = last;
    this.bubbleDown(targetIdx);
    //replace with last value
    //bubbleDown
  }

  pop() {
    //pops top value off
    if (this.contents.length > 0) {
      let topValue = this.contents[0];
      let last = this.contents.pop();
      this.contents[0] = last;
      this.bubbleDown(0);
      return topValue;
    }
    return null;
    //replaces it with last value

  }

  bubbleDown(index) {
    let firstChild = (2 * (index + 1)) - 1;
    let secondChild = (2 * (index + 1) + 1) - 1;
    //check which child is smallest
    if (this.contents[firstChild] < this.contents[secondChild] && this.contents[index] > this.contents[firstChild]) {
      let tmp = this.contents[index];
      this.contents[index] = this.contents[firstChild];
      this.contents[firstChild] = tmp;
      this.bubbleDown(firstChild);
    } else if (this.contents[secondChild] < this.contents[firstChild] && this.contents[index] > this.contents[secondChild]) {
      let tmp = this.contents[index];
      this.contents[index] = this.contents[secondChild];
      this.contents[secondChild] = tmp;
      this.bubbleDown[secondChild]
    }
  }

  bubbleUp(childIdx) {
    if (childIdx > 0) {
      let parentIdx = Math.floor((childIdx + 1) / 2) - 1;
      if (this.contents[childIdx] < this.contents[parentIdx]) {
        let tmp = this.contents[childIdx];
        this.contents[childIdx] = this.contents[parentIdx];
        this.contents[parentIdx] = tmp;
        this.bubbleUp(parentIdx);
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